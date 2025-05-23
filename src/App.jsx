import React from 'react'
import { Outlet } from 'react-router-dom'
import Top from './Components/Home/Top'
import Navbar from './Components/Home/Navbar'
import Footer from './Components/Home/Footer'
import { Toaster } from 'react-hot-toast';
// import { Route,BrowserRouter,Routes, Outlet} from 'react-router-dom'
// import BuyerRegistration from './Components/Buyer/RegisterForm'
// import BuyerLogin from './Components/Buyer/LoginForm'
// import SellerLogin from './Components/Seller/SellerSignin'
// import SellerRegister1 from './Components/Seller/SellerRegister1'
// import SellerRegister2 from './Components/Seller/SellerRegister2'
// import SellerRegister3 from './Components/Seller/SellerRegister3'
// import Dashboard from './Components/Home/Dashboard'

const App = () => {
  return (
    <div>
      {/* header  */}
       <Top/>
       <Navbar/>
      <Outlet/>
      <Footer/>
      {/* footer  */}
    </div>
  )
}

export default App