import React from 'react'

import logo from "../../assets/logo.jpg";
import avatar from "../../assets/avatar.png"

import { IoSchool } from "react-icons/io5";
import { MdOutlineHotel } from "react-icons/md";
import { MdOutlineLocalHospital } from "react-icons/md";
import { MdCarRental } from "react-icons/md";

import  { Card } from '../../components';

function SearchPage() {
  return (
    <div className='h-screen w-screen'>
                 <div className='flex z-10 justify-between items-center bg-white p-2 px-6 w-screen sticky top-0 shadow-md shadow-neutral-300 '>
     <img src={logo} alt="logo"  className=" h-auto w-[60px]  "/>


     <div className='flex md:gap-10 gap-3'>
               <button>Help</button>
               <button>Guide</button>
               <button>Explore</button>
          </div>

     <div className='flex md:gap-10 gap-3 items-center'>

        

     <img src={avatar} alt="avatar" className="  h-auto w-[50px] sm:w-[50px] "/>
     </div>
    </div>

    <div  className='mt-28 '> 
        <h1 className='text-5xl font-bold text-center'>What do you need?</h1>


        <div className='flex md:gap-16 gap-4 flex-wrap px-3 mt-20  text-xl  items-center justify-center'>
            <button className='flex gap-1 hover:text-blue-600 justify-center items-center'><IoSchool /><span>Education</span></button>
            <button className='flex gap-1 hover:text-blue-600 justify-center items-center'><MdOutlineHotel /><span>Hotels</span></button>
            <button className='flex gap-1 hover:text-blue-600 justify-center items-center'><MdOutlineLocalHospital /><span>Health</span></button>
            <button className='flex gap-1 hover:text-blue-600 justify-center items-center'><MdCarRental /> <span>Agencies</span></button>
        </div>


        <div className='text-center relative w-auto m-6'>  
 <input type="text"
  placeholder='information about a provider , a service, updates?...'
    onChange={() => {}}
    value=''
    className='border-[2px] md:w-[40%] sm:w-[70%] w-[85%] text-md p-3 rounded-3xl '
  />
    
    <button className='bg-blue-600 p-2 px-5 top-[0.3rem] absolute right-[9%] sm:right-[16%] md:right-[30.5%] rounded-3xl text-white'>Search</button>
        </div>
    </div>
    
   <div className='flex gap-10 justify-center items-center p-10 px-10 flex-wrap'>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
    </div>
  )
}

export default SearchPage