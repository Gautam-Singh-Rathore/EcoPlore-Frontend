import React, { useState } from 'react';

// Component for image pagination
const ProductImagePagination = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="w-60 h-60 overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Product image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next
        </button>
      </div>

      <p className="text-sm text-gray-600">
        Image {currentIndex + 1} of {images.length}
      </p>
    </div>
  );
};

const ProductView = () => {
  const product = {
    name: 'HP Pavilion 15',
    price: '₹52,999',
    description:
      'The HP Pavilion 15 is a powerful and sleek laptop ideal for both productivity and entertainment. Featuring a 15.6" display, 11th Gen Intel i5 processor, and long battery life.',
    images: [
      'https://5.imimg.com/data5/YF/NX/GLADMIN-3884471/hp-laptop-500x500.jpg',
      'https://m.media-amazon.com/images/I/71sxjhP+QkL._AC_SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81+N4PFF7oL._AC_SL1500_.jpg',
    ],
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Product Details</h1>

      <ProductImagePagination images={product.images} />

      <div className="mt-6 text-center">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-green-600 text-lg font-medium mb-2">{product.price}</p>
        <p className="text-gray-700 text-sm sm:text-base">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductView;