// CategoriesContainer.js
import { useState, useEffect } from 'react';
import axiosInstance from '../../api/axiosInstance';
import { CategoryGrid, CategorySlider } from '../../Components/Home/Catagories';




export const CategoriesContainer = () => {
  const [categories, setCategories] = useState([]);
  

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("public/category/all");
        if (response.status === 200) {
          setCategories(response.data);
        }
      } catch (error) {
        console.error(error);
        
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      {/* Mobile Version */}
      <div className="overflow-x-auto  px-3 py-4 md:hidden bg-[#edf1f1]">
        <div className="flex space-x-4 sm:space-x-12 md:space-x-10 lg:space-x-12">
          {categories.map((category) => (
            <CategorySlider category={category} key={category.id} />
          ))}
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:flex justify-center bg-[#edf1f1] py-6">
        <div className="flex justify-center gap-14">
          {categories.map((category) => (
            <CategoryGrid category={category} key={category.id} />
          ))}
        </div>
      </div>
    </>
  );
};