/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import avatar from "../assets/avatar.png"
import logo from '../assets/logo.jpg'
import { useCountStore } from "../store";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoMdMenu } from 'react-icons/io';

const Navbar = () => {
  const navigate = useNavigate();
  // const { isAuthenticated , username } = useCountStore()
  const [showOut , setShowOut]  = useState(false);
  const [toggleDrop , setToggleDrop]  = useState(false);
  const isAuthenticated = true
  const headerlist = [
    { id: 0, title: "Resources", link: "#resources" },
    { id: 1, title: "FAQs", link: "#faqs" },
    { id: 2, title: "Support", link: "#support" },
  ];
  return (
    <div className="fixed w-full bg-white top-0 border-[2px]  shadow-md">

      {toggleDrop && <div className="absolute border-[2px] w-full h-[300px] top-12 bg-white  ">
      <ul className='flex m-auto flex-col gap-5 p-10 justify-center items-center font-["Inter"] font-normal text-[20px]'>
            {headerlist.map((item) => (
              <li key={item.id} className="px-6">
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
          <div className="text-center flex justify-center gap-5">
          <button onClick={() => {setShowOut(prev => !prev)}}> <img src={avatar} alt="logo"  className=" h-auto w-[60px]  "/> </button>
          <button onClick={() => {}} className="hover:text-blue-700 z-50 border-[2px]  px-4 rounded-md">logout</button>
          </div>
         </div>}
     
      <div className="flex w-full  justify-between px-5  overflow-x-hidden bg-white  p-2">
        <img src={logo} alt="Logo" className="w-[70px] h-[40px]" />
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
               <button onClick={() => {setShowOut(prev => !prev)}}> <img src={avatar} alt="logo"  className=" h-auto w-[60px]  "/> </button> 
                 {showOut &&  <div className="absolute  shadow-sm p-2 top-40 md:top-28 rounded-md shadow-black ">
                       <button onClick={() => {}} className="hover:text-blue-700 z-50">logout</button>
                   </div>

                   }
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
