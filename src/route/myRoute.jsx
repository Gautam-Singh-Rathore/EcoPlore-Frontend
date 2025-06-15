
import App from "../App";

import SellerRegister1 from '../pages/Seller/SellerRegister1'
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom'
import Home from "../pages/Home/Home";
import SellerRegister2 from "../pages/Seller/SellerRegister2";
import SellerRegister3 from "../pages/Seller/SellerRegister3";
import ProductsPage from "../pages/Products/ProducsPage";
import ProductView from "../Components/Product/ProductView";
import { LoginForm } from "../Components/Buyer/LoginForm";
import { RegisterForm } from "../Components/Buyer/RegisterForm";
import Profile from "../pages/Home/Profile";
import AddProduct from "../pages/Products/AddProduct";
import Cart from "../pages/Home/Cart";
import Wishlist from "../pages/Home/Wishlist";


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

           <Route path="/buyerlogin" element={<LoginForm/>} />
            <Route path="/buyerreg" element={<RegisterForm/>} />
            <Route path="/addproduct" element={<AddProduct/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/wishlist' element={<Wishlist/>} />
        </>
    )
)

export default myRoute