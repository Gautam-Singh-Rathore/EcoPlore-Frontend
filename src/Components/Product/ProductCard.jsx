import React, { useState } from 'react';
import { Heart } from 'lucide-react'; // Assuming you use lucide-react icons

const ProductCard = ({ product }) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div
      className="w-full pr-2 pt-6 flex justify-between items-start gap-4 sm:flex-nowrap border-t-[1px]  border-gray-200 relative   "
    >
      {/* Wishlist Icon in Top Right */}
      <button
        onClick={() => toggleWishlist(product.id)}
        className="absolute top-2 right-4 sm:right-12 "
      >
        {wishlist.includes(product.id) ? (
          <Heart className="text-green-500" fill="green" size={22} />
        ) : (
          <Heart className="text-gray-400" size={22} />
        )}
      </button>

      {/* Product Image */}
      <div className="flex-shrink-0 w-[30vw] sm:w-[30vw] md:w-[20vw] lg:w-[15vw] xl:w-[12vw]">
  <img
    src={product.imageUrl}
    alt={product.name}
    className="w-full h-auto rounded-xl object-cover"
  />
</div>

      {/* Product Details */}
      <div className="flex flex-col gap-2 flex-grow w-[60vw]">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold">
          {product.name}
        </h2>

        <div className="text-xl sm:text-2xl font-bold text-gray-900">
        ₹{product.price}
        </div>

        {/* Subcategory Name below Price in Left */}
        <p className="text-gray-500 text-sm">
          {product.subCategoryName}
        </p>
        
        {/* No. of Units Left (Symmetry Maintained) */}
        <div className="h-5"> {/* Fixed height to avoid shifting */}
          {product.noOfUnits < 10 ? (
            <p className="text-red-500 text-sm ">
              {product.noOfUnits} items left
            </p>
          ) : (
            <span className="invisible">Placeholder</span> // keeps height if not visible
          )}
        </div>

        <div className="text-gray-600 text-sm sm:text-md line-clamp-2 font-sans  ">{product.description}</div>

        
      </div>
    </div>
  );
};

export default ProductCard;