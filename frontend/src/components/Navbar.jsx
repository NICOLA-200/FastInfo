/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import avatar from "../assets/avatar.png"
import logo from '../assets/logo.jpg'
import { useCountStore } from "../store";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoMdMenu } from 'react-icons/io';

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated , username ,logOut } = useCountStore()
  const [showOut , setShowOut]  = useState(false);
  const [toggleDrop , setToggleDrop]  = useState(false);

  const headerlist = [
    { id: 0, title: "Resources", link: "#resources" },
    { id: 1, title: "FAQs", link: "#faqs" },
    { id: 2, title: "Support", link: "#support" },
  ];

  const handleLogOut = () => {
    logOut()
    navigate("/")
  }

  return (
    <div className="fixed w-full bg-white top-0 border-[2px]  shadow-md">



         {/* drop down menu */}
      {toggleDrop && <div className="absolute border-[2px] md:hidden w-full h-[300px] top-12 bg-white  ">
      <ul className='flex m-auto flex-col gap-5 p-10 justify-center items-center font-["Inter"] font-normal text-[20px]'>
            {headerlist.map((item) => (
              <li key={item.id} className="px-6">
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
          <div className="text-center flex justify-center gap-5">
          <button onClick={() => {setShowOut(prev => !prev)}}> <img src={avatar} alt="logo"  className=" h-auto w-[60px]  "/> </button>
       { isAuthenticated && <button onClick={logOut} className="hover:text-blue-700 z-50 border-[2px]  px-4 rounded-md">logout</button> }   
       { isAuthenticated && <button onClick={navigate("/Profile")} className="hover:text-blue-700 z-50 border-[2px]  px-4 rounded-md">Profile</button> }   
          </div>
         </div>
         
         }



     
      <div className="flex w-full  justify-between px-5  overflow-x-hidden bg-white  p-2">
      <button onClick={navigate("/")}><img src={logo} alt="Logo" className="w-[70px] h-[40px]" />  </button>
        <button className="md:hidden  right-0 relative" onClick={() => {setToggleDrop(prev => !prev)}}><IoMdMenu/></button>
        <div className="md:flex m-auto w-full hidden">
          <ul className='flex m-auto font-["Inter"] font-normal text-[20px]'>
            {headerlist.map((item) => (
              <li key={item.id} className="px-6">
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>

          { isAuthenticated ? <>
               
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
                           </> :
          
          <button  className='border-[1px] hover:bg-blue-800 hover:text-white rounded-[10px] 
          float-left border-[#0024FB] border-solid w-[100px]
           h-[40px] bg-white text-[#0024FB] font-["Inter"] 
           font-bold'
           onClick={() => {navigate("/login")}}>
            SIGN IN
          </button>}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
