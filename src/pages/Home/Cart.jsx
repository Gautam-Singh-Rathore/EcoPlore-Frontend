import React, { useState } from 'react';
import CartCard from '../../Components/CartCard';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Wireless Headphones',
      category: 'Electronics',
      price: 2999,
      description: 'High quality wireless headphones with noise cancellation.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
      quantity: 1,
    },
    {
      id: 2,
      title: 'Smart Watch',
      category: 'Wearables',
      price: 4999,
      description: 'Feature-packed smartwatch with health tracking.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
      quantity: 1,
    },
    {
      id: 3,
      title: 'Bluetooth Speaker',
      category: 'Audio',
      price: 1999,
      description: 'Portable Bluetooth speaker with deep bass.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
      quantity: 1,
    },
    {
      id: 4,
      title: 'Gaming Mouse',
      category: 'Accessories',
      price: 1499,
      description: 'Ergonomic gaming mouse with RGB lighting.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
      quantity: 1,
    },
    {
      id: 5,
      title: 'Laptop Stand',
      category: 'Office Supplies',
      price: 999,
      description: 'Adjustable aluminum laptop stand for better posture.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
      quantity: 1,
    },
  ]);

  // Increase Quantity
  const handleIncrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity (minimum 1)
  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  // Remove Item
  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4">
      {cartItems.map((product) => (
        <CartCard
          key={product.id}
          product={product}
          quantity={product.quantity}
          onIncrease={() => handleIncrease(product.id)}
          onDecrease={() => handleDecrease(product.id)}
          onRemove={() => handleRemove(product.id)}
        />
      ))}
    </div>
  );
};

export default Cart;