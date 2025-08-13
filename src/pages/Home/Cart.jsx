import React, { useEffect, useState } from 'react';
import CartCard from '../../Components/CartCard';
import Header from '../../Components/Home/Header';
import MyLoader from '../../utils/MyLoader';
import axiosInstance from '../../api/axiosInstance';
import toast from 'react-hot-toast';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
 

  // Increase Quantity
  const handleIncrease = async (id,itemQuantity) => {
    setIsLoading(true);
    try {
        const response = await axiosInstance.post(`/private/cart/edit`,{
          id : id,
          quantity : itemQuantity+1
        })
        if(response.status == 200){
          toast.success(`Item Quantity Updated Successfully`);
          getCartItems();
        }
    } catch (error) {
      toast.error(error?.response?.data?.msg || "Failed to increase item quantity");
       console.error("Error in Increasing Cart Item Quantity",error);
    } 
    finally{
      setIsLoading(false);
    }
  };

  // Decrease Quantity (minimum 1)
  const handleDecrease = async (id,itemQuantity,cartId) => {
   setIsLoading(true);
   if(itemQuantity <=1){
     return handleRemove(cartId);
   }
   try {
        const response = await axiosInstance.post(`/private/cart/edit`,{
          id : id,
          quantity : itemQuantity-1 
        })
        if(response.status == 200){
          toast.success(`Item Quantity Updated Successfully`);
          getCartItems();
        }
   } catch (error) {
      console.error("Error in Decreasing Cart Item Quantity",error);
   }finally{
    setIsLoading(false);
   }
  };

  // Remove Item
  const handleRemove = async (cartid) => {
    setIsLoading(true);
    try {
          const response = await axiosInstance.delete(`/private/cart/remove/${cartid}`);
          if(response.status == 200){
            toast.success("Item Removed Successfully");
            getCartItems();
          }
    } catch (error) {
        console.error("Error in Removing Cart Item",error);
    }
    finally{
      setIsLoading(false);
    }
  };

   const getCartItems = async ()=>{
     setIsLoading(true);
     try {
           const response = await axiosInstance.get(`/private/cart/get`);
           if(response.status == 200){
             setCartItems(response.data);
           }
     } catch (error) {
       console.error("Error in Fetching Cart Items ",error);
     }
     finally{
      setIsLoading(false);
     }
   }

useEffect(()=>{
   getCartItems();
},[]);

   if(isLoading){
    return (
      <MyLoader/>
    )
   }

   if(cartItems.length == 0){
  
        return (
            <div className="w-full text-center py-10 text-gray-500">
              <div className='mb-12'>
                      <Header  heading="Cart"/>
                      </div>
             <div ></div>
              No Product Found
            </div>
          );
   }

  return (
    <div >
          <div className='mb-12'>
          <Header  heading="Cart"/>
          </div>
      <div >
      {cartItems.map((product) => (
        <CartCard
          key={product.productId}
          product={product}
          quantity={product.quantity}
          onIncrease={() => handleIncrease(product.productId,product.quantity)}
          onDecrease={() => handleDecrease(product.productId,product.quantity,product.cartItemId)}
          onRemove={() => handleRemove(product.cartItemId)}
        />
      ))}
      </div>
    </div>
  );
};

export default Cart;