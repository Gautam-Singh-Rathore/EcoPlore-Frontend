
import App from "../App";

// export default const myRoute = createBrowserRouter([
//     {
//         path: "/",
//         element: <App/>,
//         children :[
//             {
//                 path: "/",
//                 element: 
//             }
//         ]
//     }
// ]);

// import  Layout  from '../Layouts/Layout'
import SellerRegister1 from '../pages/Seller/SellerRegister1'
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom'
import BuyerRegistration from '../pages/Buyer/BuyerRegistration'
import BuyerLogin from '../pages/Buyer/BuyerLogin'
import Home from "../pages/Home/Home";
import SellerRegister2 from "../pages/Seller/SellerRegister2";
import SellerRegister3 from "../pages/Seller/SellerRegister3";
import ProductsPage from "../pages/Products/ProducsPage";
import ProductView from "../Components/Product/ProductView";

const myRoute = createBrowserRouter(
    createRoutesFromElements(
       <>
        <Route path='/' element={<Home/>} > 
        </Route>

       <Route path="/seller" element={<App/>} >
         <Route index  element={<SellerRegister1/>} />
         <Route path="1" element={<SellerRegister2/>} />
         <Route path="2" element={<SellerRegister3/>} />
       </Route>
         
         <Route path="/products" element={<App/>} >
          <Route index element={<ProductsPage/>} />
          </Route>
      
         <Route path="product"  element={<ProductView/>}/>
           
        </>
    )
)

export default myRoute