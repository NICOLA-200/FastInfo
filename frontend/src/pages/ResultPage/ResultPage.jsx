import React, { useEffect, useState } from "react";

import logo from "../../assets/logo.jpg";
import avatar from "../../assets/avatar.png";

import school from "../../assets/school.png";

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

import { Card } from "../../components";

import { IoMdMenu } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import axios from "axios";

import { MapContainer, TileLayer ,Popup , Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css";



import { useNavigate } from "react-router-dom";
import   { useCountStore } from "../../store"



  function ResultPage() {
    const [showDrop, setShowDrop] = useState(false);
    const [showDetails, setShowDetails] = useState();
    const [showProduct , setShowProduct] = useState();
    const [showRole , setShowRole] = useState();

    const navigate = useNavigate();
    const { isAuthenticated , username ,logOut , id } = useCountStore()
const [showOut , setShowOut]  = useState(false);
const [toggleDrop , setToggleDrop]  = useState(false);
  

    const location = useLocation();
    const providerData = location.state;
    const [data , setData] = useState(providerData.providerData);
    const [similarProvider, setSimilarProvider] = useState([]);


    



    const  latit = 1.1
    const log = 30.2

  

      useEffect(() => {
        
            async function getSimilarProvider() {
              console.log(providerData.providerData.type_service)
              const response = await axios.get(`http://localhost:3000/company/retrieveByTypeOfService/${providerData.providerData.type_service}`)

              
              setSimilarProvider([...response.data.data])

              console.log( [...response.data.data])
          
              console.log(response) 
            }
            if(providerData) {
            getSimilarProvider()
          }
      },[providerData])

      const handleNavigate = () => {
        navigate('/SearchPage');
      };


  console.log(providerData)

  const showDropDown = () => {
    setShowDrop((prev) => !prev);
  };

  return (
    <div>
      {/* header */}  
      <div className="flex z-10    justify-between items-center bg-white p-2 px-6 w-screen sticky top-0 shadow-md shadow-neutral-300 ">
        <img src={logo} alt="logo" className=" h-auto w-[60px]  " />

        <div className="text-center relative w-[500px] hidden sm:block">
          <input
            type="text"
            placeholder="information about a provider , a service, updates?..."
            onChange={() => {}}
            value=""
            className="border-[2px] md:w-[100%] sm:w-[70%] w-[85%] text-md p-3 rounded-3xl "
          />

          <button className="bg-blue-600 p-2 px-5 top-[0.3rem] absolute right-[9%] sm:right-[16%] md:right-1 rounded-3xl text-white">
            Search
          </button>
        </div>

        <div className="sm:flex md:gap-10 gap-3 mr-3  hidden">
          <button>Help</button>
          <button>Guide</button>
          <button>Explore</button>
        </div>

        <div className="flex md:gap-10 gap-5 items-center">
          {/* drop down menu */}
          <button className="sm:hidden text-xl" onClick={showDropDown}>
            {" "}
            <IoMdMenu />
          </button>
          {showDrop && (
            <div className="absolute text-center  w-[80vw] h-[30vh] bg-white top-16  left-10 shadow-md shadow-black">
              <div className="flex flex-col gap-3 my-6">
                <button>Help</button>
                <button>Guide</button>
                <button>Explore</button>
              </div>

              <div className="text-center relative w-full mr-3">
                <input
                  type="text"
                  placeholder="information about a provider , a service, updates?..."
                  onChange={() => {navigate("/searchPage")}}
                  value=""
                  className="border-[2px] md:w-[100%] sm:w-[70%] w-[85%] text-md p-3 rounded-3xl "
                />

                <button type="button" onClick={handleNavigate} className="bg-blue-600 p-2 px-5 top-[0.3rem] absolute right-[9%] sm:right-[16%] md:right-1 rounded-3xl text-white">
                  Search
                </button>
              </div>
            </div>
          )}

<button onClick={() => setShowOut(prev => !prev)}>
    <img src={avatar} alt="logo" className="h-auto w-[60px]" />
  </button>
  {showOut && (
    <div className="absolute p-2 border-[2px] right-6 space-y-2 top-40 md:top-24 rounded-md shadow-black bg-white">
      <button title="have you created " onClick={logOut} className="hover:text-blue-700 block">
        Logout
      </button>
      <button onClick={() => navigate("/profile")} className="hover:text-blue-700 border-2 px-4 rounded-md">
        Profile
      </button>
    </div>
  )}
        </div>
      </div>

      {/* content */}
      <div className="flex justify-center  items-center">
        <div className=" sm:px-10 justify-center items-center relative -top-[50rem] w-[50%] flex flex-col  bg-[#FaFaFF] ">
          <div className="w-[90%] min-w-[320px]   border-[2px] pb-10 flex flex-col gap-5 shadow-sm  rounded-xl overflow-clip ">
            <img
              src={data?.profile_file || school }
              alt=""
              className="w-full h-[50vh] object-contain bg-slate-800 "
            />
            <h1 className="text-xl font-bold ml-7">
              {data?.service_provider}
            </h1>
            <h3 className="ml-7">{data?.type_service}</h3>
            <ul className='flex w-full justify-around px-2'>
  <li><a href="#about" className='flex flex-col-reverse p-2 text-blue-500 items-center justify-center hover:border-b-[2px] border-blue-700'><span>About</span><MdOutlineContacts /></a></li>
  <li><a href="#services" className='flex flex-col-reverse p-2 text-blue-500 items-center justify-center hover:border-b-[2px] border-blue-700'><span>Services</span><MdMiscellaneousServices /></a></li>
  <li><a href="#contact" className='flex flex-col-reverse p-2 text-blue-500 items-center justify-center hover:border-b-[2px] border-blue-700'><span>Contact</span><BsFillTelephoneFill/></a></li>
  <li><a href="#announcement" className='flex flex-col-reverse p-2 text-blue-500 items-center justify-center hover:border-b-[2px] border-blue-700'><span>Announcement</span><MdAnnouncement /></a></li>
  <li><a href="#location" className='flex flex-col-reverse p-2 text-blue-500 items-center justify-center hover:border-b-[2px] border-blue-700'><span>Location</span><FaLocationDot /></a></li>
</ul>
          </div>

          <div className="flex  gap-7 px-5  flex-col h-[80vh] ">
            <div className="flex flex-col gap-8" id="about">
              <h1 className="text-3xl font-bold">{data?.service_provider}</h1>
              <h2 className="">{data?.type_service}</h2>

              <p className="md:w-[70%]">
              {data?.provider_description}
              </p>

      
            </div>

            <div id="services">
              <h1 className="font-bold text-3xl">
                <button className="hover:border-b-[2px] p-3 border-blue-700 ">
                  Services{" "}
                </button>{" "}
                &{" "}
                <button className="hover:border-b-[2px] p-3 border-blue-700 ">
                  {" "}
                  Products
                </button>{" "}
                &{" "}
                <button className="hover:border-b-[2px] p-3 border-blue-700 ">
                  Role{" "}
                </button>
              </h1>

              <div className="pt-10">
                <h2 className="font-bold">Service</h2>

                <div className="flex flex-col md:w-[70%]  bg-white border-[1px] rounded-md">
                  <div className="flex  px-3 border-neutral-700 w-full  p-5 ">
                    <div className="flex justify-between w-full">
                      <h1>{data?.service_name}</h1>
                      <button
                        onClick={() => {
                          setShowDetails(!showDetails);
                        }}
                        className="text-neutral-700 hover:text-slate-800 font-semibold flex items-center gap-2"
                      >
                        <span>show details</span>
                        <IoMdArrowDropdownCircle />
                      </button>{" "}
                    </div>
                  </div>
                  {showDetails && (
                    <div className="bg-slate-100 space-y-6 p-3">
                      <div className="space-y-7">
                        <h1 className="font-semibold">Description</h1>

                        <p>
                        {data?.service_description}
                        </p>
                      </div>

                      <div className="space-y-7">
                        <h1 className="font-semibold">Requirement</h1>

                        <div className="space-y-4">
                        {data?.service_requirement}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-10">
                <h2 className="font-bold">Product</h2>

                <div className="flex flex-col md:w-[70%]  bg-white border-[1px] rounded-md">
                  <div className="flex  px-3 border-neutral-700 w-full  p-3">
                    <div className="flex justify-between w-full">
                      <h1>{data?.product_name}</h1>
                      <button
                        onClick={() => {setShowProduct(!showProduct)}}
                        className="text-neutral-700 hover:text-slate-800 font-semibold flex items-center gap-2"
                      >
                        <span>show details</span>
                        <IoMdArrowDropdownCircle />
                      </button>{" "}
                    </div>
                  </div>
                  {showProduct &&   
                  <div className="bg-slate-100 space-y-6 p-3">
                    <div className="space-y-7">
                      <h1 className="font-semibold">Description</h1>

                      <p>
                      {data?.product_description}
                      </p>
                    </div>

                    <div className="space-y-7">
                      <h1 className="font-semibold">Requirement</h1>

                      <div className="space-y-4">
                      {data?.product_requirement}
                      </div>
                    </div>
                  </div>
                   }
                </div>
              </div>

              <div className="pt-10">
                <h2 className="font-bold">Role</h2>

                <div className="flex flex-col md:w-[70%]  bg-white border-[1px] rounded-md">
                  <div className="flex  px-3 border-neutral-700 w-full  p-3">
                    <div className="flex justify-between w-full">
                      <h1>{data?.role_name}</h1>
                      <button
                      onClick={() => {setShowRole(!showRole)}}
                        className="text-neutral-700 hover:text-slate-800 font-semibold flex items-center gap-2"
                      >
                        <span>show details</span>
                        <IoMdArrowDropdownCircle />
                      </button>{" "}
                    </div>
                  </div>
                  {showRole && 
                  <div className="bg-slate-100 space-y-6 p-3">
                    <div className="space-y-7">
                      <h1 className="font-semibold">Description</h1>

                      <p>
                      {data?.role_description}
                      </p>
                    </div>

                    <div className="space-y-7">
                      <h1 className="font-semibold">Requirement</h1>

                      <div className="space-y-4">
                      {data?.role_requirement}
                      </div>
                    </div>
                  </div>
                 }
                </div>
              </div>
            </div>

            <div className="space-y-10 ">
              <h1 className="font-bold text-2xl">Contact</h1>

              <div className="border-[2px] sm:w-[75%] gap-6 flex flex-col justify-center  p-2">
                <h2 className="flex gap-3 items-center">
                  <FaEarthAfrica /> Website: <span>{data?.website}</span>
                </h2>
                <h2 className="flex gap-3 items-center">
                  <MdEmail /> Email: <span>{data?.email}</span>
                </h2>
                <h2 className="flex gap-3 items-center">
                  <FaPhoneAlt />
                  Phone: <span>{data?.phone_number}</span>
                </h2>

                <button className="bg-blue-700 text-white p-2 font-bold text- px-7 rounded-md  w-[50%]">
                  Contact
                </button>
              </div>
            </div>

            <div className="space-y-14">
              <h1 className="font-bold text-2xl">Address</h1>
              <div className="space-y-5 ">
              <MapContainer center={[data?.location?.latitude || -1.9403, data?.location?.longitude || 29.8739]} zoom={7} scrollWheelZoom={false} className='w-[90%] h-[50vh]'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
         <Marker position={{lat:data?.location.latitude,lng:data?.location.longitude}}>

            <Popup>
              Selected Location: <br />
              <span>{data?.service_provider}</span>
            </Popup>
          </Marker>
        
  </MapContainer>
                <span className="flex items-center">
                  {" "}
                  <FaLocationDot /> <span>{data?.country}, {data?.city}</span>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[50%]   text-center">
          <h1 className="text-[34px] font-bold ">
            Similar Service providers
          </h1> 
     {similarProvider.length > 0 ? <div className="w-[32rem] h-[2850px] space-y-10 ml-52 text-center">{

         similarProvider.map(provider => {
            
          return  <Card 
               provider={provider}
            />
            
         }) 
        }</div>
          :
         <div className="w-[32rem] h-[2850px] text-center mx-auto"><p className="text-center">there is no similar provider</p></div>
      }

         
        </div>
      </div>
    </div>
  );
}

export default ResultPage;