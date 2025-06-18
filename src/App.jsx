import React from 'react'
import { Outlet } from 'react-router-dom'
import Top from './Components/Home/Top'
import Navbar from './Components/Home/Navbar'
import Footer from './Components/Home/Footer'
import { Toaster } from 'react-hot-toast';

const App = () => {

  return (
    <>
    <Top />
    <Navbar/>
    <main className="min-h-screen pt-38 md:pt-30">
      <Outlet />  {/* All nested routes will render here */}
    </main>
    <Footer />
  </>
  );
};

export default App