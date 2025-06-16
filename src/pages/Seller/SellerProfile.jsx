import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import SellerAvatarCard from '../../Components/Profile/SellerAvatarCard'
import OptionsCard from '../../Components/Profile/OptionsCard'
import BoxCard from '../../Components/Profile/BoxCard'
import { UserPen, ChartColumn  } from 'lucide-react';




// components for right-side content

const ProfilePage = () => <div>Profile Page Content</div>;
const AnalyticsPage = () => <div>Analytics Page Content</div>;
const ManageOrdersPage = () => <div>Manage Orders Page Content</div>;
const ManageProductsPage = () => <div>Manage Products Page Content</div>;
const ManageProfilePage = () => <div>Manage Profile Page Content</div>;


const SellerProfile = () => {
    const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState('manageOrders');
  
  const renderPage = () => {
    switch (selectedPage) {
      case 'profile': return <ProfilePage />;
      case 'analytics': return <AnalyticsPage />;
      case 'manageOrders': return <ManageOrdersPage />;
      case 'manageProducts': return <ManageProductsPage />;
      case 'manageProfile': return <ManageProfilePage />;
      default: return <div>Select an option</div>;
    }
  };

  return (
    <div className='flex h-screen bg-slate-50'>
      
      {/* Left Sidebar */}
      <div className='bg-white h-full w-full sm:w-1/3 max-w-sm pb-4  '>
      <SellerAvatarCard
        companyName="EcoPlore Pvt Ltd"
        gst="27AAACB1234C1Z5"
        email="support@ecoplore.com"
        createdAt="2024-06-16"
      />
        
        <div className="flex items-center justify-center p-4 px-2 gap-2">
  <BoxCard icon={UserPen} label="Profile" onClick={() => setSelectedPage('profile')} />
  <BoxCard icon={ChartColumn} label="Analytics" onClick={() => setSelectedPage('analytics')} />
</div>

<OptionsCard label="Manage Orders" onClick={() => setSelectedPage('manageOrders')} />
<OptionsCard label="Manage Products" onClick={() => setSelectedPage('manageProducts')} />
<OptionsCard label="Manage Profile" onClick={() => setSelectedPage('manageProfile')} />
<OptionsCard label="Logout" onClick={() => navigate("/logout")} />
      </div>

      {/* Right Content Area - Only visible on sm and above */}
      <div className='hidden sm:block w-2/3 p-6'>
        {renderPage()}
      </div>
    </div>
  );
}

export default SellerProfile