import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartCard = ({ product, quantity, onIncrease, onDecrease, onRemove, isLoading }) => {
  const navigate = useNavigate();

  const handleProductClick = (e) => {
    e.preventDefault();
    navigate(`/product/${product.productId}`);
  };

  // ✅ ADD: Event handlers with preventDefault to avoid page reloads
  const handleIncrease = (e) => {
    e.preventDefault();
    onIncrease();
  };

  const handleDecrease = (e) => {
    e.preventDefault();
    onDecrease();
  };

  const handleRemove = (e) => {
    e.preventDefault();
    onRemove();
  };

  return (
    <div
      className="w-full lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto p-4 pt-6 flex justify-center items-start gap-4 sm:flex-nowrap border-t-[1px] border-gray-200"
    >
      {/* Product Image */}
      <div 
        onClick={handleProductClick}
        className="flex w-[20vw] cursor-pointer"
      >
        <img
          src={product.imageUrls}
          alt={product.productName}
          className="w-40 sm:w-40 md:w-45 rounded-xl object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-2 flex-grow w-[60vw]">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold">
          {product.productName}
        </h2>
        
        <div className="text-xl sm:text-2xl font-bold text-gray-900">
          ₹{product.price}
        </div>

        {/* Quantity and Remove Buttons */}
        <div className="flex justify-between items-center mt-4">
          {/* Quantity Control */}
          <div className="flex items-center gap-2">
            <button
              type="button" 
              onClick={handleDecrease}
              // ✅ ADD: Disable button during loading
              disabled={isLoading}
              className="bg-gray-200 cursor-pointer text-gray-700 px-3 py-1 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              type="button" 
              onClick={handleIncrease}
              // ✅ ADD: Disable button during loading
              disabled={isLoading}
              className="bg-gray-200 cursor-pointer text-gray-700 px-3 py-1 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              +
            </button>
          </div>

          {/* Remove Button */}
          <button
            type="button" 
            onClick={handleRemove}
            // ✅ ADD: Disable button during loading and show loading text
            disabled={isLoading}
            className="bg-red-500 text-white px-4 py-1 cursor-pointer rounded hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {/* ✅ ADD: Show different text during loading */}
            {isLoading ? "..." : "Remove"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
