import React from 'react'
import { useNavigate } from 'react-router-dom'
import AvatarCard from '../../Components/Profile/AvatarCard'
import OptionsCard from '../../Components/Profile/OptionsCard'


const Profile = () => {
    const navigate = useNavigate();

  return (
    <div className='bg-slate-50 h-screen'>
          <AvatarCard firstName = "gaurav" lastName = "rawat" />
          <OptionsCard  label = "Orders" onClick={()=> navigate("/#") } />
          <OptionsCard label = "Wishlist" onClick={()=> navigate("/#")} />
          <OptionsCard label = "Cart" onClick={()=> navigate("/#")} />
          <OptionsCard label = "Address" onClick={()=> navigate("/#")}/>
          <OptionsCard label = "About" onClick={()=> navigate("/#")} />
          <OptionsCard label = "Logout" onClick={()=> navigate("/#")} />
        
    </div>
  )
}

export default Profile