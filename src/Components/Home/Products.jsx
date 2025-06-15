import React from 'react'

  
  export default function Products({ category, products }) {
    return (
      <div className="px-4 md:px-10 py-6 bg-white ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">{category}</h2>
          <button className="text-green-600 text-sm sm:text-base md:text-lg font-medium hover:underline">
            View All
          </button>
        </div>
  
        <div className="flex overflow-x-auto space-x-4 md:space-x-6 lg:space-x-8 scrollbar-hide pb-2">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-36 sm:w-44 md:w-52 bg-white rounded-lg  text-center pb-6 "
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-contain rounded"
              />
              <p className="text-xs sm:text-sm md:text-base font-medium mt-2 px-1 truncate">
                {product.name}
              </p>
              <p className="text-black font-semibold text-xs sm:text-sm md:text-base">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }