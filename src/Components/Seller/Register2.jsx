import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; 
import logo from "../../assets/Images/logo.png"

const Register2 = () => {
  return (
    <div>
        <SellerAddressForm/>
    </div>
  )
}


const SellerAddressForm = () => {
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
          <h1 className="text-2xl font-bold text-green-700">Pickup Details</h1>
        </div>

        {/* Address Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Floor / Building Number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="Street / Locality"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="Landmark"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="City"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="Pin Code"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="State"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button
             onClick={()=>{navigate('../2')}}
            type="button"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};


export default Register2