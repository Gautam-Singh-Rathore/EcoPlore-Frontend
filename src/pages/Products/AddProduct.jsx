import React from "react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import MyLoader from "../../utils/MyLoader";

const AddProduct = () => {
  const categories = ["Electronics", "Clothing", "Books"];
  const subcategories = ["Mobiles", "Laptops", "Headphones"];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  return (
    <div className="relative px-4 py-8">
      {" "}
      {/* Increased py for space */}
      {/* Cross Icon */}
      <div className="absolute top-4 right-4 z-10">
        <button
          type="button"
          className="text-gray-500 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-300 rounded-full text-sm p-2"
          aria-label="Close"
        >
          &#10005;
        </button>
      </div>
      <div className="px-4 py-2">
        <label
          htmlFor="message"
          className="block mb-1 text-sm font-medium text-gray-900"
        >
          <div className="text-xl font-bold text-slate-700 md:text-2xl lg:text-3xl">
            {" "}
            Name
          </div>
        </label>
        <input
          type="text"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter Name of Your Product"
        ></input>
      </div>
      <div className="px-4 py-2">
        <label
          htmlFor="price"
          className="block mb-1 text-sm font-medium text-gray-900"
        >
          <div className="text-xl font-bold text-slate-700 md:text-2xl lg:text-3xl">
            Price
          </div>
        </label>
        <input
          type="number"
          id="price"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          placeholder="Enter Price of Your Product"
        />
      </div>
      <div className="px-4 py-2">
        <label
          htmlFor="message"
          className="block mb-1 text-sm font-medium text-gray-900"
        >
          <div className="text-xl font-bold text-slate-700 md:text-2xl lg:text-3xl">
            {" "}
            Description
          </div>
        </label>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter Description of Your Product"
        ></textarea>
      </div>
      <div className="px-4 py-2">
        <label
          htmlFor="message"
          className="block mb-1 text-sm font-medium text-gray-900"
        >
          <div className="text-xl font-bold text-slate-700 md:text-2xl lg:text-3xl">
            {" "}
            No of Units
          </div>
        </label>
        <input
          type="number"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter No of Units"
        ></input>
      </div>
      <div className="px-4 py-2">
        <label
          htmlFor="message"
          className="block mb-1 text-sm font-medium text-gray-900"
        >
          <div className="text-xl font-bold text-slate-700 md:text-2xl lg:text-3xl">
            {" "}
            Details
          </div>
        </label>
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter Details of Your Product"
        ></textarea>
      </div>
      <div>
        <Dropdown
          label="Category"
          options={categories}
          selectedValue={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        />

        <Dropdown
          label="Subcategory"
          options={subcategories}
          selectedValue={selectedSubcategory}
          onChange={(e) => setSelectedSubcategory(e.target.value)}
        />
      </div>
      <div>
        {" "}
        <ImageUpload />{" "}
      </div>
      <div className="px-4 py-2">
        <button
          type="submit"
          className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-8"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddProduct;

const ImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [error, setError] = useState("");
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    const validTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/svg+xml",
    ];

    const validFiles = files.filter((file) => validTypes.includes(file.type));
    const invalidFiles = files.filter(
      (file) => !validTypes.includes(file.type)
    );

    if (invalidFiles.length > 0) {
      setError("Only SVG, PNG, JPG, or GIF files are allowed.");
      toast.error("Image upload failed!");
    } else {
      setError("");
    }

    const previews = validFiles.map((file) => URL.createObjectURL(file));
    setSelectedImages(previews);

    setLoading(true);
    // Upload each valid file to Cloudinary
    const uploadedImageUrls = await Promise.all(
      validFiles.map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "greenplore_unsigned"); // Replace with your unsigned preset

        try {
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dbkbync4n/image/upload", // Replace with your Cloud name
            formData
          );
          toast.success("Image uploaded successfully!");
          return response.data.secure_url; // Cloudinary URL
        } catch (err) {
          console.error("Upload error:", err);
          toast.error("Image upload failed!");
          return null;
        }
      })
    );

    setLoading(false);
    // Filter successful uploads
    const successfulUploads = uploadedImageUrls.filter((url) => url !== null);

    setUploadedUrls(successfulUploads);
  };

  const handleRemoveImage = (index) => {
    const updatedPreviews = [...selectedImages];
    const updatedUploadedUrls = [...uploadedUrls];
    updatedPreviews.splice(index, 1);
    updatedUploadedUrls.splice(index, 1);
    setSelectedImages(updatedPreviews);
    setUploadedUrls(updatedUploadedUrls);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full space-y-4 px-4 py-4">
      {loading && <MyLoader />}
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5
              5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0
              0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex flex-wrap gap-4 mt-4">
        {selectedImages.map((image, index) => (
          <div key={index} className="relative w-32 h-32">
            <img
              src={image}
              alt={`preview ${index}`}
              className="w-full h-full object-cover rounded-lg border border-gray-300"
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2 hover:bg-red-600"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      {/* Uploaded URLs (Cloudinary links) */}

      {uploadedUrls.length > 0 && (
        <div className="mt-4 w-full">
          <h3 className="text-lg font-semibold mb-2">Uploaded Image URLs:</h3>
          <ul className="list-disc list-inside">
            {uploadedUrls.map((url, index) => (
              <li key={index} className="text-blue-500 break-all">
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Dropdown = ({ label, options, selectedValue, onChange }) => {
  return (
    <div className="px-4 py-2">
      <label
        htmlFor={label.toLowerCase()}
        className="block mb-1 text-sm font-medium text-gray-900"
      >
        <div className="text-xl font-bold text-slate-700 md:text-2xl lg:text-3xl">
          {label}
        </div>
      </label>
      <select
        id={label.toLowerCase()}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        value={selectedValue}
        onChange={onChange}
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
