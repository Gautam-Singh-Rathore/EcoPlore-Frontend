import React from "react";
import { Leaf, Recycle, Footprints } from "lucide-react";

const AboveFooter = () => {
  return (
    <section className="w-full bg-green-50 py-10 px-4">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-green-900 mb-8">
        Shop Only Sustainable Products
      </h2>

      {/* Features */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        
        {/* Card 1 */}
        <div className="p-6 bg-green-100 rounded-2xl shadow-sm hover:shadow-md transition">
          <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="font-bold text-lg text-green-900 mb-2">
            India’s Ethical Sustainable Brand
          </h3>
          <p className="text-green-800">Discover Eco-Friendly Gifts</p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-green-100 rounded-2xl shadow-sm hover:shadow-md transition">
          <Recycle className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="font-bold text-lg text-green-900 mb-2">
            Cruelty Free & Plastic Free
          </h3>
          <p className="text-green-800">Ethically Made in India</p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-green-100 rounded-2xl shadow-sm hover:shadow-md transition">
          <Footprints className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="font-bold text-lg text-green-900 mb-2">
            GreenPlore Climate Commitment
          </h3>
          <p className="text-green-800">Reduce Carbon Footprint</p>
        </div>

      </div>
    </section>
  );
};

export default AboveFooter;