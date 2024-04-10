// import React from 'react'
import logo from "../../assets/logo.jpg";
import avatar from "../../assets/avatar.png"

function MinHeader() {
  return (
    
    <div className='flex z-10 justify-between items-center bg-white p-2 px-6 w-full sticky top-0 shadow-md shadow-neutral-300'>
     <img src={logo} alt="logo"  className=" h-auto w-[60px]  "/>
     <img src={avatar} alt="avatar" className="  h-auto w-[50px] sm:w-[50px] "/>
    </div>
  )
}

export default MinHeader