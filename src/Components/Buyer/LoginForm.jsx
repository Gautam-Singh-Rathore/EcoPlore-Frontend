import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from "../../assets/Images/logo.png";
import toast from 'react-hot-toast';
import axiosInstance from '../../api/axiosInstance';
import MyLoader from '../../utils/MyLoader';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [isLoading , setIsLoading] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Email and password are required!');
      return;
    }

    try {
      const response = await axiosInstance.post('/api', {
        email,
        password
      });

      toast.success('Signin Success!');
      setEmail('');
      setPassword('');
      // Set token/cookie here if needed

      // Navigate to dashboard/home
      // navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg || 'Login failed');
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        {/* Logo and Heading */}
        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          <h1 className="text-2xl font-bold text-green-700">Login to GreenPlore</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            LOG IN
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-between items-center text-sm text-green-600 mt-4">
          <Link to="#" className="hover:underline">Forgot your password?</Link>
          <Link to="/" className="hover:underline">Create Account</Link>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-green-300" />
          <span className="mx-2 text-green-500">or</span>
          <hr className="flex-grow border-green-300" />
        </div>

        {/* Google Button */}
        <button
          className="w-full flex items-center justify-center border border-slate-300 text-green-700 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300"
        >
          <img
            src="https://img.icons8.com/color/24/000000/google-logo.png"
            alt="Google"
            className="mr-2"
          />
          Login with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-green-300" />
          <span className="mx-2 text-green-500">or</span>
          <hr className="flex-grow border-green-300" />
        </div>

        {/* Seller Login */}
        <button
          onClick={() => navigate("/sellerlogin")}
          type="button"
          className="w-full flex items-center justify-center border border-slate-300 text-green-700 py-2 rounded-lg hover:bg-green-600 hover:text-white transition duration-300"
        >
          Login as Seller
        </button>
      </div>
      {
        isLoading && (
            <MyLoader/>
        )
      }
    </div>
  );
}