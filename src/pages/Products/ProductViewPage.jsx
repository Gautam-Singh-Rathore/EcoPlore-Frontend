import React from 'react'
import ProductView from '../../Components/Product/ProductView'
import Products from '../../Components/Home/Products';


const ProductViewPage = () => {
    const productData = {
        id: "uuid-1234",
        name: "OnePlus 9 Pro OnePlus 9 Pro ",
        description: "This is a detailed description of the OnePlus 9 Pro, offering an amazing camera, sleek design, and fast performance. Perfect for tech lovers and mobile enthusiasts. This is a detailed description of the OnePlus 9 Pro, offering an amazing camera, sleek design, and fast performance. Perfect for tech lovers and mobile enthusiasts. This is a detailed description of the OnePlus 9 Pro, offering an amazing camera, sleek design, and fast performance. Perfect for tech lovers and mobile enthusiasts.",
        price: 49999,
        details: "8GB RAM, 128GB Storage, Snapdragon Processor, 4500mAh Battery",
        noOfUnits: 8,
        images: [
          "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
          "https://media.istockphoto.com/id/145132637/photo/old-phone.jpg?s=612x612&w=0&k=20&c=NElchXXtTkdC0MpICev4h86gpOy9o9gjtGyxTEp9GF8=",
          "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg"
        ],
        sellerCompany: "EcoPlore Pvt Ltd",
        subCategoryId: 101
      };
      const sampleProducts = [
        {
          id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
          name: 'Eco-friendly Water Bottle',
          imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
          price: 299.99,
          noOfUnits: 5,
          description: 'A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.A sustainable, reusable water bottle made from BPA-free materials.',
          subCategoryName: 'Kitchen Essentials',
        },
        {
          id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
          name: 'Wireless Earbuds',
          imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
          price: 1499.49,
          noOfUnits: 20,
          description: 'A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.Experience high-quality sound with these comfortable and compact wireless earbuds.',
          subCategoryName: 'Electronics',
        },
        {
          id: '9f1b1c2a-f6c1-4d4f-99da-3e58a437f12c',
          name: 'Yoga Mat',
          imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
          price: 899.00,
          noOfUnits: 8,
          description: 'A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.',
          subCategoryName: 'Fitness',
        },
        {
          id: 'f47ac10b-58cc-4372-a567-0e02b2c3d179',
          name: 'Eco-friendly Water Bottle',
          imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
          price: 299.99,
          noOfUnits: 5,
          description: 'A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.A sustainable, reusable water bottle made from BPA-free materials.',
          subCategoryName: 'Kitchen Essentials',
        },
        {
          id: '7c9e6679-7025-40de-944b-e07fc1f90ae7',
          name: 'Wireless Earbuds',
          imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
          price: 1499.49,
          noOfUnits: 20,
          description: 'A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.A premium yoga mat with excellent grip and cushioning for all your workouts.Experience high-quality sound with these comfortable and compact wireless earbuds.',
          subCategoryName: 'Electronics',
        },
        
      ];
    
  return (
    <div>
        <div className="p-4 pb-3 lg:pb-12">
      <ProductView product={productData} />
      </div>
         {/* Similar Products */}
         <Products products={sampleProducts} />
    </div>
    
   
      
    
  )
}

export default ProductViewPage





