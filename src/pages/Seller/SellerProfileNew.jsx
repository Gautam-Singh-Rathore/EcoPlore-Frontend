import React, { useState } from "react";
import logo from "../../assets/Images/greenplore.png";

const ProfileNew = () => {
  const [sellerData, setSellerData] = useState({
    companyName: "EcoPlore Pvt Ltd",
    email: "support@ecoplore.com",
    mobile: "7898957389",
    gstNo: "27AAACB1234C1Z5",
    createdOn: "2024-06-16",
  });

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [formData, setFormData] = useState(sellerData);
  const [toast, setToast] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const showToast = (title, description, variant) => {
    setToast({ title, description, variant });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSave = () => {
    if (!formData.companyName.trim()) {
      showToast("Validation Error", "Company name is required", "destructive");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      showToast(
        "Validation Error",
        "Please enter a valid email address",
        "destructive"
      );
      return;
    }
    if (!formData.mobile.trim() || formData.mobile.length < 10) {
      showToast(
        "Validation Error",
        "Please enter a valid mobile number",
        "destructive"
      );
      return;
    }
    if (!formData.gstNo.trim()) {
      showToast("Validation Error", "GST number is required", "destructive");
      return;
    }

    setSellerData(formData);
    showToast("Profile Updated", "Your profile has been successfully updated");
    setIsEditDialogOpen(false);
  };

  const handleCancel = () => {
    setFormData(sellerData);
    setIsEditDialogOpen(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      {/* Header */}
      <header className=" bg-[#edf1f1] backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                className=" h-10 w-28 md:h-13 md:w-44"
                src={logo}
                alt="GreenPlore"
                width={50}
                height={50}
              />
            </div>
            
           <div className="flex items-center gap-3">
  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-green-600 rounded-full flex items-center justify-center">
    <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-white">
      {sellerData.companyName
        .split(" ")
        .slice(0, 2)
        .map(word => word[0].toUpperCase())
        .join("")}
    </span>
  </div>
  <div className="hidden sm:block">
    <p className="text-sm md:text-base font-medium text-gray-900">
      {sellerData.companyName}
    </p>
    <p className="text-xs md:text-sm text-gray-500">Seller</p>
  </div>
</div>
          </div>
        </div>
      </header>

      <div className="min-h-screen bg-[#edf1f1] p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Toast Notification */}
          {toast && (
            <div
              className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm animate-fade-in ${
                toast.variant === "destructive"
                  ? "bg-red-50 border border-red-200 text-red-800"
                  : "bg-green-50 border border-green-200 text-green-800"
              }`}
            >
              <div className="font-semibold">{toast.title}</div>
              <div className="text-sm mt-1">{toast.description}</div>
              <button
                onClick={() => setToast(null)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
          )}

          {/* Header */}
          <div className="text-center space-y-2">
            {/* <h1 className="text-4xl font-bold text-gray-900">Seller Profile</h1> */}
            <p className="text-gray-600 text-lg">
              Manage your business information and settings
            </p>
          </div>

          {/* Main Profile Card */}
          <div className="shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-lg p-8">
            {/* Card Header */}
            <div className="text-center pb-4">
              <div className="mx-auto w-20 h-20 rounded-full bg-green-600 flex items-center justify-center mb-4">
                <span className="text-3xl text-white">🏢</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {sellerData.companyName}
              </h2>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mt-2">
                Verified Seller
              </div>
            </div>

            {/* Card Content */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <span className="text-green-600">📧</span>
                    Contact Information
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100">
                      <span className="text-green-600">📧</span>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{sellerData.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100">
                      <span className="text-green-600">📱</span>
                      <div>
                        <p className="text-sm text-gray-500">Mobile Number</p>
                        <p className="font-medium">{sellerData.mobile}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <span className="text-green-600">📄</span>
                    Business Information
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100">
                      <span className="text-green-600">📄</span>
                      <div>
                        <p className="text-sm text-gray-500">GST Number</p>
                        <p className="font-medium font-mono">
                          {sellerData.gstNo}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100">
                      <span className="text-green-600">📅</span>
                      <div>
                        <p className="text-sm text-gray-500">Account Created</p>
                        <p className="font-medium">
                          {formatDate(sellerData.createdOn)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Edit Profile Button */}
              <div className="flex justify-center pt-6">
                <button
                  onClick={() => setIsEditDialogOpen(true)}
                  className="bg-green-600 cursor-pointer hover:shadow-lg transition-all duration-300 px-8 py-2 text-lg rounded-md text-white font-medium flex items-center gap-2"
                >
                  <span>✏️</span>
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Edit Profile Dialog */}
          {isEditDialogOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
                onClick={handleCancel}
              ></div>

              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-scale-in">
                <div className="max-w-md w-full mx-auto bg-white shadow-lg rounded-lg p-6">
                  <div className="mb-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Edit Profile
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {[
                      "companyName",
                      "email",
                      "mobile",
                      "gstNo",
                      "createdOn",
                    ].map((field) => (
                      <div key={field} className="space-y-2">
                        <label className="text-sm font-medium block">
                          {field === "createdOn"
                            ? "Account Created"
                            : field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input
                          type={
                            field === "email"
                              ? "email"
                              : field === "mobile"
                              ? "tel"
                              : field === "createdOn"
                              ? "date"
                              : "text"
                          }
                          value={formData[field]}
                          onChange={(e) =>
                            handleInputChange(field, e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-6">
                    <button
                      onClick={handleCancel}
                      className=" cursor-pointer flex-1 px-4 py-2 bg-slate-200 text-gray-800 rounded-md font-medium hover:bg-red-500 "
                    >
                      ✕ Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="cursor-pointer flex-1 px-4 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700"
                    >
                      💾 Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileNew;
