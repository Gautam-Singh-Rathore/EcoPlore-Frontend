import React from 'react';

const WishlistCard = ({ product, onRemove }) => {
  return (
    <div
      key={product.id}
     className="w-full  lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto p-4 pt-6 flex justify-center items-start gap-4 sm:flex-nowrap border-t-[1px] border-gray-200"
    >
      <div className="flex w-[20vw]">
        <img
          src={product.image}
          alt={product.title}
          className="w-40 sm:w-40 md:w-60 rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 flex-grow w-[60vw]">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold">
          {product.title}
        </h2>
        <p className="text-gray-500">{product.category}</p>
        <div className="text-xl sm:text-2xl font-bold text-gray-900">
          ₹{product.price}
        </div>
        <div className="line-clamp-4">{product.description}</div>

        {/* Remove Button - bottom right */}
        <div className="flex justify-end mt-4">
          <button
            onClick={onRemove}
            className="bg-red-500 text-white px-4 py-1 rounded cursor-pointer hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;        