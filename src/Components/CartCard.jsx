import React from 'react';

const CartCard = ({ product, quantity, onIncrease, onDecrease, onRemove }) => {
  return (
    <div
      key={product.id}
      className="w-full p-4 pt-6 flex justify-between items-start gap-4 sm:flex-nowrap border-t-[1px] border-gray-200"
    >
      {/* Product Image */}
      <div className="flex-shrink-0 w-[20vw]">
        <img
          src={product.image}
          alt={product.title}
          className="w-40 sm:w-40 md:w-60 rounded-xl object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-2 flex-grow w-[60vw]">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold">
          {product.title}
        </h2>
        <p className="text-gray-500">{product.category}</p>
        <div className="text-xl sm:text-2xl font-bold text-gray-900">
          ₹{product.price}
        </div>
        <div className="line-clamp-4">{product.description}</div>

        {/* Quantity and Remove Buttons */}
        <div className="flex justify-between items-center mt-4">
          {/* Quantity Control */}
          <div className="flex items-center gap-2">
            <button
              onClick={onDecrease}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={onIncrease}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={onRemove}
            className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;