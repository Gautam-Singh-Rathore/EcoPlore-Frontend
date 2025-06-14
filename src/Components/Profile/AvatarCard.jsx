import React from 'react'
  
const AvatarCard = ({ firstName , lastName  }) => {
    const initials = `${firstName[0] || ''}${lastName[0] || ''}`;
  return (
    
     <div className='p-4'>  
         <div className="flex justify-center w-full">
     <div className="bg-white p-6 rounded-2xl w-full flex flex-col items-center space-y-4 ">
       {/* Avatar Circle */}
       <div className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center text-3xl font-semibold ">
         {initials.toUpperCase()}
       </div>

       {/* Name Text */}
       <div className="text-center">
         <h2 className="text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl">
           {firstName} {lastName}
         </h2>
       </div>
     </div>
   </div>
   </div>
  );
    
  
}

export default AvatarCard