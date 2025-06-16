import React, { useState } from 'react';
import WishlistCard from '../../Components/Wishlistcard';
import Header from '../../Components/Home/Header';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      title: 'Wireless Headphones',
      category: 'Electronics',
      price: 2999,
      description: 'High quality wireless headphones with noise cancellation.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
    },{
        id: 1,
        title: 'Wireless Headphones',
        category: 'Electronics',
        price: 2999,
        description: 'High quality wireless headphones with noise cancellation.',
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
      },{
        id: 1,
        title: 'Wireless Headphones',
        category: 'Electronics',
        price: 2999,
        description: 'High quality wireless headphones with noise cancellation.',
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
      },{
        id: 1,
        title: 'Wireless Headphones',
        category: 'Electronics',
        price: 2999,
        description: 'High quality wireless headphones with noise cancellation.',
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
      }
  ]);

  const handleRemove = (id) => {
    setWishlistItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <div className='mb-12'>
                <Header  heading="Wishlist"/>
                </div>
       <div >
       {wishlistItems.map((item) => (
        <WishlistCard
          key={item.id}
          product={item}
          onRemove={() => handleRemove(item.id)}
        />
      ))}
       </div>
    </div>
  );
};

export default Wishlist;