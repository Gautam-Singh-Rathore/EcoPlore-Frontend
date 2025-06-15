import React from "react";
import ImageUpload from "../../Components/Seller/ProductUpload/ImageUpload";

const AddProduct = () => {
  return (
    <div>
      <div className="px-8 py-8">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          <div className="text-xl font-bold text-slate-700 md:text-2xl lg:text-3xl">
            {" "}
            Name
          </div>
        </label>
        <input
          id="message"
          rows={2}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter Name of Your Product"
        ></input>
      </div>

      <div className="px-8 py-8">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          <div className="text-xl font-bold text-slate-700 md:text-2xl lg:text-3xl">
            {" "}
            Title
          </div>
        </label>
        <textarea
          id="message"
          rows={2}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write your Blog Title here..."
        ></textarea>
      </div>

      <div>
        {" "}
        <ImageUpload />{" "}
      </div>
    </div>
  );
};

export default AddProduct;


