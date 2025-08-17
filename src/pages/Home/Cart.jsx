import React, { useEffect, useState } from "react";
import CartCard from "../../Components/CartCard";
import Header from "../../Components/Home/Header";
import MyLoader from "../../utils/MyLoader";
import axiosInstance from "../../api/axiosInstance";
import toast from "react-hot-toast";
import AddressSelector from "./Address";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Increase Quantity
  const handleIncrease = async (id, itemQuantity) => {
    setIsLoading(true);
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
      setIsLoading(false);
    }
  };

  // Decrease Quantity (minimum 1)
  const handleDecrease = async (id, itemQuantity, cartId) => {
    setIsLoading(true);
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
      setIsLoading(false);
    }
  };

  // Remove Item
  const handleRemove = async (cartid) => {
    setIsLoading(true);
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
      setIsLoading(false);
    }
  };

  const getCartItems = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(`/private/cart/get`);
      if (response.status == 200) {
        setCartItems(response.data);
      }
    } catch (error) {
      console.error("Error in Fetching Cart Items ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  if (isLoading) {
    return <MyLoader />;
  }

  if (cartItems.length == 0) {
    return (
      <div className="w-full text-center py-10 text-gray-500">
        <div className="mb-12">
          <Header heading="Cart" />
        </div>
        <div></div>
        Your Cart is Empty
      </div>
    );
  }

  return (
    <div>
      <div className="mb-12">
        <Header heading="Cart" />
      </div>
      <div>
        <div><AddressSelector/></div>
        {/* {cartItems.map((product) => (
        <CartCard
          key={product.productId}
          product={product}
          quantity={product.quantity}
          onIncrease={() => handleIncrease(product.productId,product.quantity)}
          onDecrease={() => handleDecrease(product.productId,product.quantity,product.cartItemId)}
          onRemove={() => handleRemove(product.cartItemId)}
        />
      ))} */}
        {cartItems.map((product) => (
          <CartCard
            key={product.productId}
            product={product}
            quantity={product.quantity}
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

        {/* Total Price and Checkout Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4 md:py-5">
      {/* Total price on left */}
      <div className="text-xl sm:text-2xl font-bold text-gray-800">
        Total: ₹
        {cartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        ).toLocaleString('en-IN')}
      </div>
      
      {/* Checkout button on right */}
      <button
        className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center"
        onClick={() => alert("Proceeding to checkout...")}
      >
        Checkout
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
