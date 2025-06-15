import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logo from "../../assets/Images/logo.png";
import { Link } from 'react-router-dom';
import axios from 'axios';

const SellerLogin = () => {
  return (
    <div>
      <LoginForm heading={"Login as Seller"} />
    </div>
  );
};

export function LoginForm({ heading }) {
  const navigate = useNavigate();

  // State for form inputs
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // State for loading and error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // API call to login endpoint
      const response = await axios.post('https://your-api-url.com/api/seller/login', {
        email: formData.email,
        password: formData.password,
      });

      console.log('Login Successful:', response.data);
      // Save token in localStorage (if received)
      if (response.data.token) {
        localStorage.setItem('sellerToken', response.data.token);
      }

      // Navigate to seller dashboard or home
      navigate('/seller/dashboard');

    } catch (err) {
      console.error('Login Failed:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        {/* Back Arrow */}
        <div className="mb-4">
          <button
            className="text-green-600 hover:text-green-800 flex items-center"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-6 h-6 mr-1" />
          </button>
        </div>

        {/* Logo and Heading */}
        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
          <h1 className="text-2xl font-bold text-green-700">{heading}</h1>
        </div>

        {/* Error Message */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            {loading ? 'Logging in...' : 'LOG IN'}
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-between items-center text-sm text-green-600 mt-4">
          <Link to="#" className="hover:underline">Forgot your password?</Link>
          <Link to="/sellerregister1" className="hover:underline">Register as Seller</Link>
        </div>
      </div>
    </div>
  );
}

export default SellerLogin;