import React from 'react'
import { Outlet } from 'react-router-dom'
import Top from './Components/Home/Top'
import Navbar from './Components/Home/Navbar'
import Footer from './Components/Home/Footer'
import { Toaster } from 'react-hot-toast';

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