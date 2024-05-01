// import React from 'react'
import logo from "../../assets/logo.jpg";
import avatar from "../../assets/avatar.png"
import { useState } from "react";

import { useCountStore } from "../../store";
import { useNavigate, useSearchParams } from "react-router-dom";

function MinHeader() {
  const navigate = useNavigate();
  const { isAuthenticated , username ,logOut } = useCountStore()
  const [showOut , setShowOut]  = useState(false);
  const [toggleDrop , setToggleDrop]  = useState(false);


  const handleLogOut = () => {
    logOut()
    navigate("/")
  }

  return (
    
    <div className='flex z-10 justify-between items-center bg-white p-2 px-6 w-full sticky top-0 shadow-md shadow-neutral-300'>
          <img src={logo} alt="Logo" className="w-[70px] h-[40px]" />  
                 <div>
  <button onClick={() => setShowOut(prev => !prev)}>
    <img src={avatar} alt="logo" className="h-auto w-[60px]" />
  </button>
  {showOut && (
    <div className="absolute p-2 border-[2px] right-6 space-y-2 top-40 md:top-24 rounded-md shadow-black bg-white">
      <button title="have you created " onClick={handleLogOut} className="hover:text-blue-700 block">
        Logout
      </button>
      <button onClick={() => navigate("/Profile")} className="hover:text-blue-700 border-2 px-4 rounded-md">
        Profile
      </button>
    </div>
  )}
</div>
    </div>
  )
}

export default MinHeader