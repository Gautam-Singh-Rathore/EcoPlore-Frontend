
import App from "../App";

// import SellerRegister1 from '../pages/Seller/SellerRegister1'
import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom'
import Home from "../pages/Home/Home";
// import SellerRegister2 from "../pages/Seller/SellerRegister2";
// import SellerRegister3 from "../pages/Seller/SellerRegister3";
import ProductsPage from "../pages/Products/ProducsPage";
import ProductView from "../Components/Product/ProductView";
import { LoginForm } from "../Components/Buyer/LoginForm";
import { RegisterForm } from "../Components/Buyer/RegisterForm";
import Profile from "../pages/Home/Profile";
import SubCategoryProducts from "../pages/Products/SubCategoryProducts";
import Cart from "../pages/Home/Cart";
import Wishlist from "../pages/Home/Wishlist";
import SellerLogin from "../Components/Seller/SellerSignin";
import SellerRegisterWizard from "../Components/Seller/SellerRegisterWizard"
import SellerProfile from "../pages/Seller/SellerProfile";
import ProductViewPage from "../pages/Products/ProductViewPage";
import AddProduct from "../pages/Products/AddProduct";
import ShippingPolicy from "../Components/Terms&Conditions/ShippingPolicy";
import PrivacyPolicy from "../Components/Terms&Conditions/PrivicyPolicy";
import FAQPage from "../Components/Terms&Conditions/FAQPage";
import ContactUs from "../Components/Terms&Conditions/ContactUs";
import ReturnsRefundPolicy from "../Components/Terms&Conditions/ReturnsRefundPolicy";
import TermsAndConditions from "../Components/Terms&Conditions/TermsAndConditions";
import CustomerSupport from "../Components/Terms&Conditions/CustomerSupport";
import AboutUs from "../Components/Terms&Conditions/AboutUs";
import Careers from "../Components/Terms&Conditions/Careers";


const myRoute = createBrowserRouter(
    createRoutesFromElements(
<>
      {/* Routes WITHOUT Header & Footer */}
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/seller-login" element={<SellerLogin />} />
      <Route path="/register-seller" element={<SellerRegisterWizard />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/addproduct" element={<AddProduct/>} />
      <Route path="/seller-profile" element={<SellerProfile />} />
      <Route path="/profile" element={<Profile />} />

      {/* Routes WITH Header & Footer via App */}
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="products/category/:id" element={<ProductsPage />} />
        <Route path="products/sub-category/:id" element={<SubCategoryProducts />} />
        <Route path="product/:id" element={<ProductViewPage />} />
        <Route path="/shipping-policy" element={<ShippingPolicy/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/faqs" element={<FAQPage/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/return-and-refund-policy" element={<ReturnsRefundPolicy/>} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
        <Route path="/support" element={<CustomerSupport/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/careers" element={<Careers/>} />
        
      
      </Route>
    </>
    )
)

export default myRoute