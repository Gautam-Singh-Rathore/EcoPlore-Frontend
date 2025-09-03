import React, { useEffect, useState } from "react";
import CartCard from "../../Components/CartCard";
import Header from "../../Components/Home/Header";
import MyLoader from "../../utils/MyLoader";
import axiosInstance from "../../api/axiosInstance";
import toast from "react-hot-toast";
import AddressSelector from "./Address";
import { CartEmpty } from "../../Components/Home/EmptyState";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  // ✅ CHANGE 1: Split loading states
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [isOperationLoading, setIsOperationLoading] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [total, setTotal] = useState(0);

  // ✅ CHANGE 2: Add operation loading to handleIncrease
  const handleIncrease = async (id, itemQuantity) => {
    setIsOperationLoading(true);
    try {
      const response = await axiosInstance.post(`/private/cart/edit`, {
        id: id,
        quantity: itemQuantity + 1,
      });
      if (response.status == 200) {
        toast.success(`Item Quantity Updated Successfully`);
        getCartItems();
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.msg || "Failed to increase item quantity"
      );
      console.error("Error in Increasing Cart Item Quantity", error);
    } finally {
      setIsOperationLoading(false);
    }
  };

  // ✅ CHANGE 3: Add operation loading to handleDecrease
  const handleDecrease = async (id, itemQuantity, cartId) => {
    setIsOperationLoading(true);
    if (itemQuantity <= 1) {
      return handleRemove(cartId);
    }
    try {
      const response = await axiosInstance.post(`/private/cart/edit`, {
        id: id,
        quantity: itemQuantity - 1,
      });
      if (response.status == 200) {
        toast.success(`Item Quantity Updated Successfully`);
        getCartItems();
      }
    } catch (error) {
      console.error("Error in Decreasing Cart Item Quantity", error);
    } finally {
      setIsOperationLoading(false);
    }
  };

  // ✅ CHANGE 4: Add operation loading to handleRemove
  const handleRemove = async (cartid) => {
    setIsOperationLoading(true);
    try {
      const response = await axiosInstance.delete(
        `/private/cart/remove/${cartid}`
      );
      if (response.status == 200) {
        toast.success("Item Removed Successfully");
        getCartItems();
      }
    } catch (error) {
      console.error("Error in Removing Cart Item", error);
    } finally {
      setIsOperationLoading(false);
    }
  };

  // ✅ CHANGE 5: Use initial loading for getCartItems
  const getCartItems = async () => {
    setIsInitialLoading(true);
    try {
      const response = await axiosInstance.get(`/private/cart/get`);
      if (response.status == 200) {
        setCartItems(response.data);
      }
    } catch (error) {
      console.error("Error in Fetching Cart Items ", error);
    } finally {
      setIsInitialLoading(false);
    }
  };

  function loadRazorpayScript() {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }

  const handleCheckout = async () => {
    try {
      const res = await loadRazorpayScript();
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const response = await axiosInstance.get(
        `/private/order/payment/${total * 100}`
      );
      const order_id = response.data;

      const options = {
        key: "rzp_live_RCemjVt0zfY8v2",
        amount: total * 100,
        currency: "INR",
        name: "Greenplore",
        description: "Order Payment",
        order_id: order_id,
        handler: async function (response) {
          toast.success("Payment Successful!");
          console.log("Payment Details:", response);
          const verifyResponse = await axiosInstance.post(
            "/private/order/payment/verify",
            {
              razorpayOrderId: response.data.razorpay_order_id,
              razorpayPaymentId: response.data.razorpay_payment_id,
              razorpaySignature: response.data.razorpay_signature,
            }
          );
          if (verifyResponse.status == 200) {
            const response = await axiosInstance.post(`/private/order/create`, {
              items: cartItems,
              addressId: selectedAddress.id,
            });
            if (response.status == 200) {
              toast.success("Order placed successfully");
            } else {
              toast.error("Something went wrong. Please try again.");
            }
          }
        },
        prefill: {
          name: "Greenplore",
          email: "infogreenplore@gmail.com",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Failed to initiate payment.");
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  useEffect(() => {
    const totalAmount = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(totalAmount);
  }, [cartItems]);

  // ✅ CHANGE 6: Only show loader for initial loading
  if (isInitialLoading) {
    return <MyLoader />;
  }

  if (cartItems.length == 0) {
    return (
      <div className="w-full text-center py-10 text-gray-500">
        <div className="mb-12">
          <Header heading="Cart" />
        </div>
        <div>
          <CartEmpty/>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-12">
        <Header heading="Cart" />
      </div>
      <div>
        <div>
          <AddressSelector
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
          />
        </div>
        
        {cartItems.map((product) => (
          <CartCard
            key={product.productId}
            product={product}
            quantity={product.quantity}
            // ✅ CHANGE 7: Pass operation loading state
            isLoading={isOperationLoading}
            onIncrease={() =>
              handleIncrease(product.productId, product.quantity)
            }
            onDecrease={() =>
              handleDecrease(
                product.productId,
                product.quantity,
                product.cartItemId
              )
            }
            onRemove={() => handleRemove(product.cartItemId)}
          />
        ))}

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4 md:py-5">
              <div className="text-xl sm:text-2xl font-bold text-gray-800">
                Total: ₹{total}
              </div>

              <button
                // ✅ CHANGE 8: Add button type and event prevention
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleCheckout();
                }}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center"
              >
                Checkout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
