import React, { useState } from "react";
import logo from "../../assets/Images/logo.png";
import { ArrowLeft } from "lucide-react";
import axios from "axios";

const SellerRegisterWizard = () => {
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
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/seller/signup",
        formData
      );
      console.log("✅ Registered successfully:", response.data);
      alert("Seller registered!");
    } catch (error) {
      console.error("❌ Registration failed:", error);
      alert("Registration failed. Check console for details.");
    }
  };

  const goBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const goNext = () => {
    if (step < 3) setStep(step + 1);
    else handleSubmit();
  };

  const steps = {
    1: (
      <>
        <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" type="text" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" />
        <input name="mobileNo" value={formData.mobileNo} onChange={handleChange} placeholder="Phone Number" type="tel" />
        <input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" type="text" />
        <input name="GSTNumber" value={formData.GSTNumber} onChange={handleChange} placeholder="GST Number" type="text" />
        <input name="password" value={formData.password} onChange={handleChange} placeholder="Password" type="password" />
      </>
    ),
    2: (
      <>
        <input name="buildingNo" value={formData.buildingNo} onChange={handleChange} placeholder="Building No" />
        <input name="street" value={formData.street} onChange={handleChange} placeholder="Street" />
        <input name="landmark" value={formData.landmark} onChange={handleChange} placeholder="Landmark" />
        <input name="city" value={formData.city} onChange={handleChange} placeholder="City" />
        <input name="pinCode" value={formData.pinCode} onChange={handleChange} placeholder="Pin Code" />
        <input name="state" value={formData.state} onChange={handleChange} placeholder="State" />
      </>
    ),
    3: (
      <>
        <input name="accountNo" value={formData.accountNo} onChange={handleChange} placeholder="Account Number" />
        <input name="IFSCCode" value={formData.IFSCCode} onChange={handleChange} placeholder="IFSC Code" />
      </>
    )
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg relative">
        {/* Logo and Back */}
        <div className="absolute top-4 left-4">
          {step > 1 && (
            <button onClick={goBack} className="text-green-600 hover:text-green-800">
              <ArrowLeft />
            </button>
          )}
        </div>

        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
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
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            {step === 3 ? "Submit" : "Next"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerRegisterWizard;
