import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/logo.png";
import toast from "react-hot-toast";
import axiosInstance from "../../api/axiosInstance";

export function RegisterForm() {
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const handleregister = async (e) => {
    e.preventDefault();

    // Field validation
    if (
      !firstName ||
      !lastName ||
      !email ||
      !mobile ||
      !password ||
      !confirmpassword
    ) {
      toast.error("All fields are required!");
      return;
    }

    // Password match check
    if (password !== confirmpassword) {
      toast.error("Passwords do not match.");
      return;
    }

      console.log("Starting Login")
    try {
      const response = await axiosInstance.post("/auth/customer/signup", {
        firstName,
        lastName,
        email,
        mobile,
        password,
      });
      console.log("Done Login : ",response)

      if (response.status == 200) {
        toast.success("Registration successful!");
      }

      // Reset form fields
      setfirstName("");
      setlastName("");
      setemail("");
      setmobile("");
      setpassword("");
      setconfirmpassword("");

      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.msg) {
        toast.error(error.response.data.msg);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        {/* Logo and Heading */}
        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          <h1 className="text-2xl font-bold text-green-700">
            Register as Buyer
          </h1>
        </div>

        {/* Input Fields */}
        <form className="space-y-4">
          <input
            onChange={(e) => {
              setfirstName(e.target.value);
            }}
            type="text"
            placeholder="First Name"
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            onChange={(e) => {
              setlastName(e.target.value);
            }}
            type="text"
            placeholder="Last Name"
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            onChange={(e) => {
              setmobile(e.target.value);
            }}
            type="tel"
            maxLength={10}
            placeholder="Phone Number"
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 appearance-none "
          />
          <input
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            onChange={(e) => {
              setconfirmpassword(e.target.value);
            }}
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={handleregister}
            type="button"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer"
          >
            Register
          </button>
        </form>

        <div className="text-center text-md  mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-700 font-semibold hover:underline"
          >
            {" "}
            Login
          </Link>
        </div>

        {/* Divider */}
        {/* <div className="flex items-center my-4">
          <hr className="flex-grow border-green-300" />
          <span className="mx-2 text-green-500">or</span>
          <hr className="flex-grow border-green-300" />
        </div> */}

        {/* Google Button */}
        {/* <button
          className="w-full flex items-center justify-center border border-slate-300 text-green-700 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300"
        >
          <img
            src="https://img.icons8.com/color/24/000000/google-logo.png"
            alt="Google"
            className="mr-2"
          />
          Continue with Google
        </button> */}

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-green-300" />
          <span className="mx-2 text-green-500">or</span>
          <hr className="flex-grow border-green-300" />
        </div>

        {/* Become a Greenplore seller */}
        <button
          onClick={() => {
            navigate("/register-seller");
          }}
          type="submit"
          className="w-full flex cursor-pointer items-center justify-center border border-slate-300 text-green-700 py-2 rounded-lg hover:bg-green-600 hover:text-white transition duration-300"
        >
          Become a Seller
        </button>
      </div>
    </div>
  );
}
