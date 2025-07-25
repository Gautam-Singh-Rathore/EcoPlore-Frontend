import React, { useState, useRef } from 'react';

const ProductView = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images?.[0] || null);

  if (!product.images || product.images.length === 0) {
    return <p className="text-gray-500">No images available</p>;
  }

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 relative ">

      {/* Thumbnails for large screens only */}
      <div className="hidden lg:flex flex-col gap-4 p-4">
        {product.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            onClick={() => setSelectedImage(img)}
            className={`w-20 h-20 object-cover rounded cursor-pointer border-2 p-1 ${
              selectedImage === img ? 'border-green-500 shadow-md' : 'border-slate-300'
            }`}
          />
        ))}
      </div>

      {/* Main Image + Buttons for large screens */}
      <div className="flex-1 flex flex-col items-center sticky top-0">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-full max-w-md h-[400px] object-contain"
        />

        {/* Thumbnails for mobile */}
        <div className="flex lg:hidden gap-2 mt-2 overflow-x-auto">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Mobile Thumbnail ${idx + 1}`}
              onClick={() => setSelectedImage(img)}
              className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
                selectedImage === img ? 'border-green-500 shadow-md' : 'border-slate-300'
              }`}
            />
          ))}
        </div>

        {/* Buttons for large screens */}
        <div className="hidden lg:flex gap-4 mt-6">
          <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer">Add to Cart</button>
          <button className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 cursor-pointer">Buy Now</button>
        </div>

        {/* Product Info for mobile */}
        <div className="lg:hidden mt-6 w-full">
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Product Info for large screen */}
      <div className="hidden lg:block w-1/2 max-h-[calc(100vh-2rem)] overflow-y-auto">
        <ProductInfo product={product} />
      </div>

      {/* Fixed Buttons at bottom for mobile/small screens */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white flex justify-around p-4 border-t border-gray-300 z-50">
        <button className="w-[45%] py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer">Add to Cart</button>
        <button className="w-[45%] py-2 bg-orange-500 text-white rounded hover:bg-orange-600 cursor-pointer">Buy Now</button>
      </div>
    </div>
  );
};

const ProductInfo = ({ product }) => {
  const descRef = useRef(null);

  return (
    <div className="p-4 bg-white space-y-4 min-h-fit">
      {/* Product Name */}
      <h2 className="text-2xl font-bold lg:text-3xl">{product.name}</h2>

      {/* Product Price */}
      <p className="text-xl lg:text-2xl text-green-600 font-semibold py-1">₹{product.price}</p>

      {/* Units left in red if < 10 */}
      {product.noOfUnits < 10 && (
        <p className="text-red-500">{product.noOfUnits} items left!</p>
      )}

      {/* Product Details */}
      <div className="bg-slate-50 py-1 my-2 lg:my-4 lg:text-xl font-medium">
        Details:
      </div>
      <p className="text-gray-700">{product.details}</p>

      {/* Product Description */}
      <div className="bg-slate-50 py-1 my-2 lg:my-4 lg:text-xl font-medium">
        Description:
      </div>
      <p ref={descRef} className="text-gray-600">
        {product.description}
      </p>

      {/* Seller Company */}
      <p className="text-gray-700 text-sm mt-2 py-3"><strong>Sold By:</strong> {product.sellerCompany}</p>
    </div>
  );
};

export default ProductView;