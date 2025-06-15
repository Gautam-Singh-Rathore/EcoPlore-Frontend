import React, { useState } from 'react';
import axios from 'axios';
import MyLoader from '../../../utils/MyLoader';
import toast from 'react-hot-toast';

const ImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [error, setError] = useState('');
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const [loading,setLoading] = useState(false);

  const handleFileChange = async (e) => {
    
    const files = Array.from(e.target.files);
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];

    const validFiles = files.filter(file => validTypes.includes(file.type));
    const invalidFiles = files.filter(file => !validTypes.includes(file.type));

    if (invalidFiles.length > 0) {
      setError('Only SVG, PNG, JPG, or GIF files are allowed.');
      toast.error('Image upload failed!');
    } else {
      setError('');
    }

    const previews = validFiles.map(file => URL.createObjectURL(file));
    setSelectedImages(previews);
 
    setLoading(true);
    // Upload each valid file to Cloudinary
    const uploadedImageUrls = await Promise.all(validFiles.map(async (file) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'greenplore_unsigned'); // Replace with your unsigned preset

      try {
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dbkbync4n/image/upload', // Replace with your Cloud name
          formData
        );
        toast.success('Image uploaded successfully!');
        return response.data.secure_url; // Cloudinary URL
      } catch (err) {
        console.error('Upload error:', err);
        toast.error('Image upload failed!');
        return null;
      }
    }));

    setLoading(false);
    // Filter successful uploads
    const successfulUploads = uploadedImageUrls.filter(url => url !== null);

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
         {loading && <MyLoader/>}
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5
              5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0
              0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
          </svg>
          <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" multiple className="hidden" onChange={handleFileChange} />
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
                <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;