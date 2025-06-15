import React from 'react'
import Top from '../../Components/Home/Top'
import Navbar from '../../Components/Home/Navbar'
import ImageSlider from '../../Components/Home/ImageSlider';
import { CategoryGrid,CategorySlider } from '../../Components/Home/Catagories';
import Products from '../../Components/Home/Products';
import Footer from '../../Components/Home/Footer';

import PC from "../../assets/Images/Category Images/Personal Care/PC 3.jpeg"
import HD from "../../assets/Images/Category Images/Home Decor/HD 1.jpeg"
import IP from "../../assets/Images/Category Images/Indoor Plant/IP 3.jpeg"



const categories = [
    {
      name: 'Personal Care',
      img: PC,
      subcategories: ['Mobiles', 'Laptops', 'Cameras'],
    },
    {
      name: 'Kitchen',
      img: HD,
      subcategories: ['Men', 'Women', 'Kids'],
    },
    {
      name: 'Home Decor',
      img: HD,
      subcategories: ['Furniture', 'Kitchen', 'Decor'],
    },
    {
      name: 'Planters',
      img: IP,
      subcategories: ['Skincare', 'Makeup', 'Haircare'],
    },
    {
      name: 'Fashion',
      img: PC ,
      subcategories: ['Fitness', 'Cricket', 'Cycling'],
    },
    {
      name: 'Others',
      img: HD,
      subcategories: ['Action Figures', 'Board Games', 'Soft Toys'],
    },
  ];

 

const demoCategoryData = [
  {
    category: "Mobiles",
    products: [
      {
        name: "Motorola G85 5G",
        price: "₹15,999",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
      },
      {
        name: "Samsung Galaxy M14",
        price: "₹13,499",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
      },{
        name: "Motorola G85 5G",
        price: "₹15,999",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
      },
      {
        name: "Samsung Galaxy M14",
        price: "₹13,499",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
      },{
        name: "Motorola G85 5G",
        price: "₹15,999",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
      },
      {
        name: "Samsung Galaxy M14",
        price: "₹13,499",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
      },
    ],
  },
  {
    category: "Laptops",
    products: [
        {
            name: "Motorola G85 5G",
            price: "₹15,999",
            image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
          },
          {
            name: "Samsung Galaxy M14",
            price: "₹13,499",
            image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
          },{
            name: "Motorola G85 5G",
            price: "₹15,999",
            image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
          },
          {
            name: "Samsung Galaxy M14",
            price: "₹13,499",
            image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
          },{
            name: "Motorola G85 5G",
            price: "₹15,999",
            image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
          },
          {
            name: "Samsung Galaxy M14",
            price: "₹13,499",
            image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
          },{
            name: "Motorola G85 5G",
            price: "₹15,999",
            image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
          },
          {
            name: "Samsung Galaxy M14",
            price: "₹13,499",
            image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
          },{
            name: "Motorola G85 5G",
            price: "₹15,999",
            image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
          },
          {
            name: "Samsung Galaxy M14",
            price: "₹13,499",
            image: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg",
          },
    ],
  },
];
 

  // Categories 
// For Mobile
  export const CategorySliderPage = () => {
    return (
      <div className="overflow-x-auto whitespace-nowrap px-3 py-4 md:hidden bg-white">
        <div className="flex space-x-4 sm:space-x-12 md:space-x-10 lg:space-x-12">
          {categories.map((category, index) => (
                 <CategorySlider category={category} key={index} />
          ))}
        </div>
      </div>
    );
  };

// For Large Screens
export const CategoryGridPage = () => {
    return (
      <div className="hidden md:flex justify-center bg-white py-6">
        <div className="flex justify-center gap-14">
          {categories.map((category, index) => (
             <CategoryGrid category={category} key={index} />
          ))}
        </div>
      </div>
    );
  };


  // Products

  export function ProductsPage() {
    return (
      <div>
        {demoCategoryData.map((item, index) => (
          <Products
            key={index}
            category={item.category}
            products={item.products}
          />
        ))}
      </div>
    );
  }


const Home = () => {
    return (
        <div className='bg-[#f7f9f7]' >
            <Top/>
            <Navbar/>
            <CategorySliderPage/>
            <CategoryGridPage/>
            <ImageSlider/>
              <ProductsPage />
            <Footer/>
    
        </div>
      )
}

export default Home