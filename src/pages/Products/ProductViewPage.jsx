import React, { useEffect, useState } from 'react'
import ProductView from '../../Components/Product/ProductView'
import Products from '../../Components/Home/Products';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../api/axiosInstance';


const ProductViewPage = () => {
  const {id} = useParams();
  const [productData , setProductData] = useState({});
  const [similarProducts , setSimilarProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductData = async()=>{
    try{
      setIsLoading(true);
      const response = await axiosInstance.get(`/public/product/${id}`);
      if(response.status==200){
        setProductData(response.data);
        fetchSimilarProducstData(response.data.subCategoryId);
      }

    }catch(error){
      return <div>No Product Found</div>;
    }finally{
      setIsLoading(false);
    }
  }

  const fetchSimilarProducstData = async(subCategoryId)=>{
    try {
      const response = await axiosInstance.get(`public/product/sub_category/${subCategoryId}`);
      if (response.status == 200) {
        setSimilarProducts(response.data);
      }
    } catch (error) {
      return <div>No Product Found</div>;
    }
  }

 useEffect(()=>{
  fetchProductData();
 })

    
  return (
    <div>
        <div className="p-4 pb-3 lg:pb-12">
      <ProductView product={productData} />
      </div>
         {/* Similar Products */}
         <Products products={similarProducts} />
    </div>

  )
}

export default ProductViewPage





