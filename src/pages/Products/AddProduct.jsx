import { useState, useEffect } from "react";
import logo from "../../assets/Images/logo.png";
import axios from "axios";
import toast from "react-hot-toast";
import MyLoader from "../../utils/MyLoader";
import axiosInstance from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  // Categories and Subcategories
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  // Product Form States
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [units, setUnits] = useState("");
  const [details, setDetails] = useState("");

  // Image Upload States
  const [selectedImages, setSelectedImages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("public/category/all");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Failed to load categories.");
      }
    };
    fetchCategories();
  }, []);

  // Fetch subcategories when a category is selected
  useEffect(() => {
    if (selectedCategory) {
      const fetchSubcategories = async () => {
        try {
          const response = await axiosInstance.get(`public/category/${selectedCategory}/get`);
          setSubcategories(response.data);
        } catch (error) {
          console.error("Error fetching subcategories:", error);
          toast.error("Failed to load subcategories.");
        }
      };
      fetchSubcategories();
    } else {
      setSubcategories([]); // Clear subcategories if no category is selected
    }
  }, [selectedCategory]);

  // Clean up generated URLs to prevent memory leaks
  useEffect(() => {
    return () => {
      selectedImages.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [selectedImages]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const validTypes = ["image/jpeg", "image/png", "image/gif", "image/svg+xml"];

    const validFiles = files.filter((file) => validTypes.includes(file.type));
    const invalidFiles = files.filter((file) => !validTypes.includes(file.type));

    if (invalidFiles.length > 0) {
      setError("Only SVG, PNG, JPG, or GIF files are allowed.");
      toast.error("Invalid file type selected!");
      return;
    }

    // Append only up to 5 files
    const totalFiles = [...selectedImages, ...validFiles];
    if (totalFiles.length > 5) {
      toast.error("You can upload up to 5 images only.");
      return;
    }

    const filesWithPreview = validFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setSelectedImages((prev) => [...prev, ...filesWithPreview]);
    setError("");
  };

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "greenplore_unsigned");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dbkbync4n/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error(`Failed to upload image: ${file.name}`);
      return null;
    }
  };

  const handleUpload = async () => {
    // if (!name || !price || !description || !units || !details || !selectedCategory || !selectedSubcategory) {
    //   toast.error("All fields are required!");
    //   return;
    // }
    if (selectedImages.length === 0) {
      toast.error("Please select at least one image!");
      return;
    }

    setLoading(true);

    try {
      // Upload all images to Cloudinary
      const uploadPromises = selectedImages.map((imageObj) => 
        uploadImageToCloudinary(imageObj.file)
      );

      const uploadedImageUrls = await Promise.all(uploadPromises);
      const successfulUploads = uploadedImageUrls.filter(url => url !== null);

      if (successfulUploads.length === 0) {
        toast.error("Failed to upload all images. Please try again.");
        return;
      }

      // Construct final product object
      const productData = {
        name,
        imageUrls: successfulUploads,
        price: parseFloat(price),
        description,
        noOfUnits: parseInt(units),
        details,
        categoryId: parseInt(selectedCategory),
        subCategoryId: parseInt(selectedSubcategory),
      };

      // Submit product data to your backend
      const response = await axiosInstance.post("/private/product/add", productData);
      toast.success("Product added successfully!");

      // Reset Form
      setName("");
      setPrice("");
      setDescription("");
      setUnits("");
      setDetails("");
      setSelectedCategory("");
      setSelectedSubcategory("");
      setSelectedImages([]);
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error(error.response?.data?.message || "Failed to add product.");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveImage = (index) => {
    const fileToRemove = selectedImages[index];
    URL.revokeObjectURL(fileToRemove.preview); // clean up
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-green-50">
      <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] mx-auto bg-white p-8 rounded-2xl shadow-lg relative py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="absolute top-4 right-4 z-10"> 
          <button
            type="button"
            onClick={() => navigate("/seller-profile")}
            className="text-black bg-gray-100 hover:bg-gray-200   rounded-full text-sm p-3"
            aria-label="Close"
          > 
            &#10005;
          </button>
        </div>

        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="Logo" className="w-10 h-10 md:w-12 md:h-12 lg:h-14 lg:w-14 mr-2 cursor-pointer" />
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-700">Add Product</h1>
        </div>

        {/* Form Fields */}
        {[{ label: "Name", value: name, setValue: setName, type: "text", placeholder: "Enter Product Name" },
          { label: "Price", value: price, setValue: setPrice, type: "number", placeholder: "Enter Product Price" },
          { label: "No of Units", value: units, setValue: setUnits, type: "number", placeholder: "Enter No of Units" }].map(({ label, value, setValue, type, placeholder }) => (
            <div className="px-4 py-2" key={label}>
              <label className="block mb-1 text-xl font-bold text-slate-700">{label}</label>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type={type}
                placeholder={placeholder}
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          ))}

        {[{ label: "Description", value: description, setValue: setDescription },
          { label: "Details", value: details, setValue: setDetails }].map(({ label, value, setValue }) => (
            <div className="px-4 py-2" key={label}>
              <label className="block mb-1 text-xl font-bold text-slate-700">{label}</label>
              <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                rows={4}
                placeholder={`Enter ${label} of Your Product`}
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          ))}

        {/* Category & Subcategory Dropdowns */}
        {[{ label: "Category", value: selectedCategory, setValue: setSelectedCategory, options: categories },
          { label: "Subcategory", value: selectedSubcategory, setValue: setSelectedSubcategory, options: subcategories }].map(({ label, value, setValue, options }) => (
            <div className="px-4 py-2" key={label}>
              <label className="block mb-1 text-xl font-bold text-slate-700">{label}</label>
              <select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <option value="">Select {label}</option>
                {options.map((option) => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
            </div>
          ))}

        {/* Image Upload Section */}
        <div className="flex flex-col items-center justify-center w-full space-y-4 px-4 py-4">
          {loading && <MyLoader />}
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-500" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5A5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 5 files)</p>
            </div>
            <input id="dropzone-file" type="file" multiple className="hidden" onChange={handleFileChange} />
          </label>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex flex-wrap gap-4 mt-4">
            {selectedImages.map((file, index) => (
              <div key={index} className="relative w-32 h-32">
                <img
                  src={file.preview}
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
        </div>

        <button
          onClick={handleUpload}
          type="button"
          disabled={loading}
          className={`w-full bg-green-600 cursor-pointer text-white py-3 mt-6 rounded-lg hover:bg-green-700 transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Uploading..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default AddProduct;