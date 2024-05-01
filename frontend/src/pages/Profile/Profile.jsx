import React, { useEffect, useState } from 'react'
import school from '../../assets/school.png'
import logo from "../../assets/logo.jpg";
import avatar from "../../assets/avatar.png"
import map from "../../assets/map.png"

import { MdOutlineContacts } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAnnouncement } from "react-icons/md";
// import { FaQuestionCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdownCircle } from "react-icons/io";

import { FaEarthAfrica } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import   { useCountStore } from "../../store"
import axios from "axios"
import { MapContainer, TileLayer ,Popup , Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css";


import { useNavigate, useSearchParams } from "react-router-dom";






function Profile() {
     const [showDetails , setShowDetails] = useState();
     const [showProduct , setShowProduct] = useState();
     const [showRole , setShowRole] = useState();

    const  [data,setData]  = useState();
    console.log(data?.location)

    const  latit = -1.1
    const log = 29.2

    let latitude = -2.3

    const navigate = useNavigate();
    const { isAuthenticated , username ,logOut , id } = useCountStore()
    const [showOut , setShowOut]  = useState(false);
    const [toggleDrop , setToggleDrop]  = useState(false);


    useEffect(() => {
           async function  getProvider() {
               console.log(id)
               const response = await axios.get(`http://localhost:3000/company/retrieveById/${id}`)
              setData(response.data.data)
               console.log( typeof response.data.data.location.latitude)
               console.log(response)
           }

           getProvider();
    },[id])

    const handleLogOut = () => {
      logOut()
      navigate("/")
    }


  return (
    <div>
         <div className='flex z-10 justify-between items-center bg-white p-2 px-6 w-full sticky top-0 shadow-md shadow-neutral-300'>
     <img src={logo} alt="logo"  className=" h-auto w-[60px]  "/>
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


    {/* header */}


    <div className='xl:px-20 sm:px-10 justify-center items-center md:justify-normal pt-10 flex flex-col md:flex-row-reverse bg-[#FaFaFF] ' >
     <div className='w-[35%] min-w-[320px] sm:min-w-[25rem]  border-[2px] pb-10 flex flex-col gap-5 shadow-sm  rounded-xl overflow-clip '>
          <img src={data?.profile_file || school} alt="" className='w-full h-[50vh] object-fill bg-slate-800 ' />
          <h1 className='text-xl font-bold ml-7'>{data?.service_provider}</h1>
          <h3 className='ml-7'>{data?.type_service ? data?.type_service : "none"}</h3>
          <ul className='flex w-full justify-around px-2'>
  <li><a href="#about" className='flex flex-col-reverse p-2 text-blue-500 items-center justify-center hover:border-b-[2px] border-blue-700'><span>About</span><MdOutlineContacts /></a></li>
  <li><a href="#services" className='flex flex-col-reverse p-2 text-blue-500 items-center justify-center hover:border-b-[2px] border-blue-700'><span>Services</span><MdMiscellaneousServices /></a></li>
  <li><a href="#contact" className='flex flex-col-reverse p-2 text-blue-500 items-center justify-center hover:border-b-[2px] border-blue-700'><span>Contact</span><BsFillTelephoneFill/></a></li>
  <li><a href="#announcement" className='flex flex-col-reverse p-2 text-blue-500 items-center justify-center hover:border-b-[2px] border-blue-700'><span>Announcement</span><MdAnnouncement /></a></li>
  <li><a href="#location" className='flex flex-col-reverse p-2 text-blue-500 items-center justify-center hover:border-b-[2px] border-blue-700'><span>Location</span><FaLocationDot /></a></li>
</ul>
     </div>


     <div className='flex sm:w-[75%] gap-7 px-5 flex-col md:gap-16 h-[80vh]   md:overflow-auto'>

          <div className='flex flex-col gap-8' id='about'>
         <h1 className='text-3xl font-bold'>{data?.service_provider}</h1>
         <h2 className=''>{data?.type_service}</h2>

         <p className='md:w-[70%]'>{data?.provider_description}
          </p>

          {/* <div className='relative border-[1px] border-blue-900 rounded-sm p-3 h-16 w-[50%] text-blue-700'><h1>seeking new student </h1> <button className='text-sm absolute bottom-1 right-2'>read more</button></div> */}
          </div>

          <div id='services'>
               <h1 className='font-bold text-3xl'><button className='hover:border-b-[2px] p-3 border-blue-700 '>Services </button>  & <button className='hover:border-b-[2px] p-3 border-blue-700 '> Products</button>  &  <button className='hover:border-b-[2px] p-3 border-blue-700 '>Role </button></h1>

           <div className='pt-10'>
               <h2 className='font-bold'>Service</h2>


               <div className='flex flex-col md:w-[70%]  bg-white border-[1px] rounded-md'>
                    <div className='flex  px-3 border-neutral-700 w-full  p-5 '>
                         <div className='flex justify-between w-full'>
                         <h1>{data?.service_name}</h1>
                         <button onClick={() => {setShowDetails(!showDetails)}} className='text-neutral-700 hover:text-slate-800 font-semibold flex items-center gap-2'><span>show details</span><IoMdArrowDropdownCircle /></button>                  </div>
                         </div>
                         {showDetails &&  <div className='bg-slate-100 space-y-6 p-3'>
                                     <div className='space-y-7'>
                                     <h1 className='font-semibold'>Description</h1>
       
                                     <p>{data?.service_description}
                                    </p>
                                    </div>

                                    <div className='space-y-7'>
                                        <h1 className='font-semibold'>Requirement</h1>

                                        <div className='space-y-4'>
                                        {data?.service_requirement}
                                        </div>
                                    </div>

                         </div> }

   
               </div>
               </div>


               <div className='pt-10'>
               <h2 className='font-bold'>Product</h2>


               <div className='flex flex-col md:w-[70%]  bg-white border-[1px] rounded-md'>
                    <div className='flex  px-3 border-neutral-700 w-full  p-3'>
                         <div className='flex justify-between w-full'>
                         <h1>{data?.product_name}</h1>
                         <button onClick={() => {setShowProduct(!showProduct)}} className='text-neutral-700 hover:text-slate-800 font-semibold flex items-center gap-2'><span>show details</span><IoMdArrowDropdownCircle /></button>                  </div>
                         </div>
                       {showProduct &&    <div className='bg-slate-100 space-y-6 p-3'>
                                     <div className='space-y-7'>
                                     <h1 className='font-semibold'>Description</h1>
       
                                     <p>{data?.product_description}
                                    </p>
                                    </div>

                                    <div className='space-y-7'>
                                        <h1 className='font-semibold'>Requirement</h1>

                                        <div className='space-y-4'>
                                          {data?.product_requirement}
                                        </div>
                                    </div>

                         </div> }

   
               </div>
               </div>


               <div className='pt-10'>
               <h2 className='font-bold'>Role</h2>


               <div className='flex flex-col md:w-[70%]  bg-white border-[1px] rounded-md'>
                    <div className='flex  px-3 border-neutral-700 w-full  p-3'>
                         <div className='flex justify-between w-full'>
                         <h1>{data?.role_name}</h1>
                         <button onClick={() => {setShowRole(!showRole)}} className='text-neutral-700 hover:text-slate-800 font-semibold flex items-center gap-2'><span>show details</span><IoMdArrowDropdownCircle /></button>                  </div>
                         </div>
                          {showRole &&   <div className='bg-slate-100 space-y-6 p-3'>
                                     <div className='space-y-7'>
                                     <h1 className='font-semibold'>Description</h1>
       
                                     <p>{data?.role_description}
                                    </p>
                                    </div>

                                    <div className='space-y-7'>
                                        <h1 className='font-semibold'>Requirement</h1>

                                        <div className='space-y-4'>
                                      {data?.role_requirement}
                                        </div>
                                    </div>

                         </div>}

   
               </div>
               </div>
          </div>

        

        <div className='space-y-10 ' id='contact'>
            <h1 className='font-bold text-2xl'>Contact</h1>

            <div className='border-[2px] sm:w-[75%] gap-6 flex flex-col justify-center  p-2'>

              
               <h2 className='flex gap-3 items-center'><FaEarthAfrica /> Website:  <span>{data?.website}</span></h2>
               <h2 className='flex gap-3 items-center'><MdEmail /> Email:  <span>{data?.email}</span></h2>
               <h2 className='flex gap-3 items-center'><FaPhoneAlt />Phone:{" "} <span>{data?.phone_number}</span></h2>

               <button className='bg-blue-700 text-white p-2 font-bold text- px-7 rounded-md  w-[50%]'>Contact</button>

            </div>

        </div>



        <div  id='location' className='space-y-14'>
          <h1 className='font-bold text-2xl'>Address</h1>
          <div className='space-y-5 '>
          
          <MapContainer center={[data?.location?.latitude || -1.9403, data?.location?.longitude || 29.8739]} zoom={7} scrollWheelZoom={false} className='w-[90%] h-[50vh]'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
         {/* <Marker position={{lat:-1.8,lng:29.7}}> */}
         <Marker position={{lat:data?.location.latitude,lng:data?.location.longitude}}>

            <Popup>
              Selected Location: <br />
              <span>{data?.service_provider}</span>
            </Popup>
          </Marker>
        
  </MapContainer>
         <span className='flex items-center'>   < FaLocationDot /> <span>{data?.country}, {data?.city}</span> </span>
           </div>
        </div>

     
             


          
     </div>

    </div>

    </div>
  )
}

export default Profile