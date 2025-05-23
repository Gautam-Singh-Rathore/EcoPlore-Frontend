import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; 
import logo from "../../assets/Images/logo.png"

const Register3 = () => {
  return (
    <div>
        <SellerBankDetails/>
    </div>
  )
}

const SellerBankDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg relative">
        
        {/* Back Arrow */}
        <button
          className="absolute top-4 left-4 text-green-600 hover:text-green-800"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft />
        </button>

        {/* Logo and Heading */}
        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          <h1 className="text-2xl font-bold text-green-700">Bank Details</h1>
        </div>

        {/* Bank Details Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="Account Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="Confirm Account Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="IFSC Code"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
            type="button" onClick={()=>{navigate('/')}}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};


export default Register3