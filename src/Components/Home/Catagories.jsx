import { FaChevronDown } from 'react-icons/fa';
import axiosInstance from '../../api/axiosInstance';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


// for Mobile


  export const CategorySlider = ({category}) => {
    const navigate = useNavigate();

    return (
      <div
      onClick={()=>{navigate(`products/category/${category.id}`)}}
      key={category.index}
      className="flex flex-col items-center justify-center min-w-[80px] text-center"
    >
      <img
        src={category.img}
        alt={category.name}
        className="w-12 h-12 object-contain rounded-full border border-gray-200 shadow-2xl shadow-slate-100"
      />
      <span className="text-sm mt-1">{category.name}</span>
    </div>
    )
  }
  
  
// for large screens
  export const CategoryGrid = ({ category }) => {
  const [subcategories, setSubcategories] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    const getSubcategories = async () => {
      try {
        const response = await axiosInstance.get(`public/category/${category.id}/get`);
        if (response.status === 200) {
          setSubcategories(response.data);
        }
      } catch (error) {
        console.error("Subcategory fetch error:", error);
        toast.error("Failed to get Subcategories!");
      }
    };
    getSubcategories();
  }, [category.id]);

  return (
    <div className="relative group text-center cursor-pointer">
      <div className="flex items-center justify-center gap-1 text-sm font-medium text-gray-700 lg:text-xl">
        {category.name}
        <FaChevronDown className="text-xs text-gray-500 mt-0.5" />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col bg-white rounded-sm shadow-lg z-10 min-w-[140px] py-2">
        {subcategories.length > 0 ? (
          subcategories.map((sub) => (
            <button
            onClick={()=>{navigate(`products/sub-category/${sub.id}`)}}
              key={sub.id}
              className="px-4 py-2 text-left hover:bg-[#f7f9f7] text-sm cursor-pointer text-gray-700"
            >
              {sub.name || sub}
            </button>
          ))
        ) : (
          <div className="px-4 py-2 text-sm text-gray-500">No subcategories</div>
        )}
      </div>
    </div>
  );
};