import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import AvatarCard from '../../Components/Profile/AvatarCard'
import OptionsCard from '../../Components/Profile/OptionsCard'
import BoxCard from '../../Components/Profile/BoxCard'
import { Package,Heart } from 'lucide-react';
import Cart from '../Home/Cart'
import Wishlist from '../Home/Wishlist'


// Dummy components for right-side content

const OrdersPage = () => <div>Orders Page Content</div>;
const WishlistPage = () => <div><Wishlist/></div>;
const CartPage = () => <div><Cart/></div>;
const AddressPage = () => <div>Address Page Content</div>;


const Profile = () => {
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState('orders');


  const renderPage = () => {
    switch (selectedPage) {
      case 'orders': return <OrdersPage />;
      case 'wishlist': return <WishlistPage />;
      case 'cart': return <CartPage />;
      case 'address': return <AddressPage />;
      default: return <div>Select an option</div>;
    }
  };

  const handleNavigation = (page) => {
    if (window.innerWidth < 1024) { // mobile device
      navigate(`/${page}`);
    } else { // large screen
      setSelectedPage(page);
    }
  };

  return (
    <div className='flex h-screen bg-slate-50 overflow-hidden'>

      {/* Left Sidebar */}
      <div className='bg-white h-full w-full lg:w-1/3 pb-4 overflow-hidden'>
        <AvatarCard
          firstName="Gaurav"
          lastName="Rawat"
          mobile="+91 9876543210"
          email="gaurav@example.com"
          createdAt="2024-06-16"
        />

        <div className="flex items-center justify-center p-4 px-2 gap-2">
          <BoxCard icon={Package} label="Orders" onClick={() => handleNavigation('orders')} />
          <BoxCard icon={Heart} label="Wishlist" onClick={() => handleNavigation('wishlist')} />
        </div>
        <OptionsCard label="Cart" onClick={() => handleNavigation('cart')} />
        <OptionsCard label="Address" onClick={() => handleNavigation('address')} />
        <OptionsCard label="Logout" onClick={() => navigate("/logout")} />
      </div>

      {/* Right Content Area - only visible on large screens */}
      <div className='hidden lg:block w-2/3 p-4 overflow-y-auto h-full'>
        {renderPage()}
      </div>

    </div>
  );
};

export default Profile