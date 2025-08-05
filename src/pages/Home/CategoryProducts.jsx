import Products from "../../Components/Home/Products";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import toast from "react-hot-toast";

const CategoryProducts = () => {
  const [productsByCategory, setProductsByCategory] = useState([]);

  useEffect(() => {
    const fetchCategoriesAndProducts = async () => {
      try {
        // 1. First fetch categories
        const categoriesRes = await axiosInstance.get("public/category/all");
        const categories = categoriesRes.data;

        // 2. Then fetch products for each category
        const results = [];
        for (const category of categories) {
          const productRes = await axiosInstance.get(`/products?categoryId=${category.id}`);
          results.push({
            ...category,
            products: productRes.data
          });
        }
        
        setProductsByCategory(results);
      } catch (error) {
        console.error(error);
        toast.error("Failed to get Categories");
      }
    };

    fetchCategoriesAndProducts();
  }, []); // Empty dependency array since we only want this to run once on mount

  return (
    <div>
      {productsByCategory.map(category => (
        <Products 
          key={category.id}
          products={category.products}
        />
      ))}
    </div>
  )
}

export default CategoryProducts;