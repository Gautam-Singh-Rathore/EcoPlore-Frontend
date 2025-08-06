import Products from "../../Components/Home/Products";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import toast from "react-hot-toast";

const CategoryProducts = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetching categories
        const categoriesRes = await axiosInstance.get("public/category/all");
        if (categoriesRes.status == 200) {
          setCategories(categoriesRes.data);
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to get Categories");
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      {/* {productsByCategory.map((category) => (
        <Products key={category.id} products={category.products} />
      ))} */}
      {categories.map((cat)=>{
        <Products key={cat.id} category={cat}/>
      })}
    </div>
  );
};

export default CategoryProducts;
