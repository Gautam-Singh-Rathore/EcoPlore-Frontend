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

 

// Sample Data mimicking ProductCardResponseDto
const sampleProducts = [
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    name: 'Eco-friendly Water Bottle',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
    price: 299.99,
    noOfUnits: 5,
    description: 'A sustainable, reusable water bottle made from BPA-free materials.',
    subCategoryName: 'Kitchen Essentials',
  },
  {
    id: '7c9e6679-7425-40de-944b-e07fc1f90ae7',
    name: 'Wireless Earbuds',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
    price: 1499.49,
    noOfUnits: 20,
    description: 'Experience high-quality sound with these comfortable and compact wireless earbuds.',
    subCategoryName: 'Electronics',
  },
  {
    id: '9f1b1c2a-f6c1-4d4f-99da-3e58a437f12c',
    name: 'Yoga Mat',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
    price: 899.00,
    noOfUnits: 8,
    description: 'A premium yoga mat with excellent grip and cushioning for all your workouts.',
    subCategoryName: 'Fitness',
  },
  {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d179',
    name: 'Eco-friendly Water Bottle',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
    price: 299.99,
    noOfUnits: 5,
    description: 'A sustainable, reusable water bottle made from BPA-free materials.',
    subCategoryName: 'Kitchen Essentials',
  },
  {
    id: '7c9e6679-7025-40de-944b-e07fc1f90ae7',
    name: 'Wireless Earbuds',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
    price: 1499.49,
    noOfUnits: 20,
    description: 'Experience high-quality sound with these comfortable and compact wireless earbuds.',
    subCategoryName: 'Electronics',
  },
  {
    id: '9f1b1c2a-f6c1-4d4k-99da-3e58a437f12c',
    name: 'Yoga Mat',
    imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1-500x500.jpg',
    price: 899.00,
    noOfUnits: 8,
    description: 'A premium yoga mat with excellent grip and cushioning for all your workouts.',
    subCategoryName: 'Fitness',
  }
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

  export function ProductsPage1() {
    return (
      <div>
        <Products  products={sampleProducts} />
      </div>
    );
  }

  

const Home = () => {
    return (
        <div className='bg-[#f7f9f7]' >
            
          
            <CategorySliderPage/>
            <CategoryGridPage/>
            <ImageSlider/>
              <ProductsPage1 />
      
        </div>
      )
}

export default Home