const SellerAvatarCard = ({ companyName, gst, email, createdAt }) => {
    // Calculate initials from companyName
    const initials = `${companyName[0] || ''}`;
  
    return (
      <div className="relative bg-white rounded-lg shadow-md w-full p-4 pt-28 ">
        
        {/* Avatar Circle at Top Center */}
        <div className="absolute -top-0 mt-2 left-1/2 transform -translate-x-1/2">
          <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl font-semibold shadow-md">
            {initials.toUpperCase()}
          </div>
        </div>
  
        {/* Content Below Avatar */}
        <div className="flex justify-between items-start mt-4">
          
          {/* Left Side: Company Name and Email */}
          <div>
            <h2 className="text-lg font-bold">{companyName}</h2>
            <p className="text-slate-500 text-sm">{email}</p>
          </div>
  
          {/* Right Side: GST Number */}
          <div className="text-right">
            <p className="text-lg text-gray-700">{gst}</p>
            <p className="text-sm text-slate-500">Created on: {createdAt}</p>
          </div>
        </div>
  
        {/* Bottom Right: Date of Creation 
        <div className="absolute bottom-2 right-4">
         
        </div> */}
      </div>
    );
  };
  
  export default SellerAvatarCard;