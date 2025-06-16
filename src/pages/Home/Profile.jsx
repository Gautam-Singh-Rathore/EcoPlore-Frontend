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

  return (
    <div className='flex h-screen bg-slate-50'>
      
      {/* Left Sidebar */}
      <div className='bg-white h-full w-full sm:w-1/3 max-w-sm pb-4  '>
        <AvatarCard
          firstName="Gaurav"
          lastName="Rawat"
          mobile="+91 9876543210"
          email="gaurav@example.com"
          createdAt="2024-06-16"
        />
        
        <div className="flex items-center justify-center p-4 px-2 gap-2">
          <BoxCard icon={Package} label="Orders" onClick={() => setSelectedPage('orders')} />
          <BoxCard icon={Heart} label="Wishlist" onClick={() => setSelectedPage('wishlist')} />
        </div>
        <OptionsCard label="Cart" onClick={() => setSelectedPage('cart')} />
        <OptionsCard label="Address" onClick={() => setSelectedPage('address')} />
        <OptionsCard label="Logout" onClick={() => navigate("/logout")} />
      </div>

      {/* Right Content Area - Only visible on sm and above */}
      <div className='hidden sm:block w-2/3 p-6'>
        {renderPage()}
      </div>
    </div>
  );
}

export default Profile