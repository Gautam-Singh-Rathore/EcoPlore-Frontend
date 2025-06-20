import React, { useState } from "react";
import logo from "../../assets/Images/logo.png";
import { ArrowLeft } from "lucide-react";
import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";

const SellerRegisterWizard = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    companyName: "",
    GSTNumber: "",
    mobileNo: "",
    buildingNo: "",
    street: "",
    landmark: "",
    pinCode: "",
    city: "",
    state: "",
    fullName: "",
    accountNo: "",
    IFSCCode: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post(
        "/auth/seller/signup",
        formData
      );
      console.log("✅ Registered successfully:", response.data);
      toast.success("Seller registered!");
      navigate("/");
    } catch (error) {
      console.error("❌ Registration failed:", error);
      toast.error(error?.response?.data?.msg || "Registration failed." )
      
    }
  };

  const goBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const validateStep = () => {
    if (step === 1) {
      return formData.email && formData.password && formData.companyName && formData.GSTNumber && formData.mobileNo;
    } else if (step === 2) {
      return formData.buildingNo && formData.street && formData.landmark && formData.city && formData.pinCode && formData.state;
    } else if (step === 3) {
      return formData.fullName && formData.accountNo && formData.IFSCCode;
    }
    return false;
  };
  
  const goNext = () => {
    if (!validateStep()) {
      toast.error("Please fill all fields before proceeding.")
      return;
    }
  
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const steps = {
    1: (
      <>
        {/* <input
  name="fullName"
  value={formData.fullName}
  onChange={handleChange}
  placeholder="Full Name"
  type="text"
  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
/> */}

<input
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email"
  type="email"
  required
  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 "
/>

<input
  name="mobileNo"
  value={formData.mobileNo}
  onChange={handleChange}
  placeholder="Phone Number"
  type="tel"
  required
  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
/>

<input
  name="companyName"
  value={formData.companyName}
  onChange={handleChange}
  placeholder="Company Name"
  type="text"
  required
  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
/>

<input
  name="GSTNumber"
  value={formData.GSTNumber}
  onChange={handleChange}
  placeholder="GST Number"
  type="text"
  required
  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
/>

<input
  name="password"
  value={formData.password}
  onChange={handleChange}
  placeholder="Password"
  type="password"
  required
  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
/>

 
      </>
    ),
    2: (
      <>
<input
  name="buildingNo"
  value={formData.buildingNo}
  onChange={handleChange}
  placeholder="Building No"
  type="text"
  required
  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
/>

<input
  name="street"
  value={formData.street}
  onChange={handleChange}
  placeholder="Street"
  type="text"
  required
  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
/>

<input
  name="landmark"
  value={formData.landmark}
  onChange={handleChange}
  placeholder="Landmark"
  type="text"
  required
  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
/>

<input
  name="city"
  value={formData.city}
  onChange={handleChange}
  placeholder="City"
  type="text"
  required
  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
/>

<input
  name="pinCode"
  value={formData.pinCode}
  onChange={handleChange}
  placeholder="Pin Code"
  type="text"
  required
  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
/>

<input
  name="state"
  value={formData.state}
  onChange={handleChange}
  placeholder="State"
  type="text"
  required
  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
/>
      </>
    ),
    3: (
      <>

          <input
  name="fullName"
  value={formData.fullName}
  onChange={handleChange}
  placeholder="Your Full Name"
  type="text"
  required
  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
/>    
        <input
  name="accountNo"
  value={formData.accountNo}
  onChange={handleChange}
  placeholder="Account Number"
  type="text"
  required
  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
/>

<input
  name="IFSCCode"
  value={formData.IFSCCode}
  onChange={handleChange}
  placeholder="IFSC Code"
  type="text"
  required
  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
/>
      </>
    )
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg relative">
        {/* Logo and Back */}
        <div className="absolute top-4 left-4">
          {step > 1 && (
            <button onClick={goBack} className="text-green-600 hover:text-green-800 cursor-pointer">
              <ArrowLeft />
            </button>
          )}
        </div>

        <div className="flex items-center justify-center mb-6">
          <img onClick={()=>{navigate("/")}} src={logo} alt="Logo" className="w-10 h-10 mr-2 cursor-pointer" />
          <h1 className="text-2xl font-bold text-green-700">
            {step === 1 ? "Register as Seller" : step === 2 ? "Pickup Address" : "Bank Details"}
          </h1>
        </div>

        {/* Dynamic Form Section */}
        <form className="space-y-4">
          {steps[step]}

          <button
            type="button"
            onClick={goNext}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer"
          >
            {step === 3 ? "Submit" : "Next"}
          </button>

          {step === 1 && (
  <>
    {/* Divider */}
    <div className="flex items-center my-4">
      <hr className="flex-grow border-green-300" />
      <span className="mx-2 text-green-500">or</span>
      <hr className="flex-grow border-green-300" />
    </div>

    {/* Seller Login */}
    <button
      onClick={() => navigate("/login")}
      type="button"
      className="w-full flex items-center justify-center border cursor-pointer border-slate-300 text-green-700 py-2 rounded-lg hover:bg-green-600 hover:text-white transition duration-300"
    >
      Login as Seller
    </button>
  </>
)}
        </form>
        
      </div>
    </div>
  );
};

export default SellerRegisterWizard;
