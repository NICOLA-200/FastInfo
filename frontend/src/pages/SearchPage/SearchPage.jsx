import React, { useEffect ,useState } from 'react'

import logo from "../../assets/logo.jpg";
import avatar from "../../assets/avatar.png"

import { IoSchool } from "react-icons/io5";
import { MdOutlineHotel } from "react-icons/md";
import { MdOutlineLocalHospital } from "react-icons/md";
import { MdCarRental } from "react-icons/md";
import { useCountStore } from '../../store';

import  { Card } from '../../components';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function SearchPage() {

  const  [data,setData]  = useState([]);
  const [searchTerm , setSearchTerm]  = useState();
  const { logOut} = useCountStore()
  const navigate =  useNavigate()


   useEffect(() => {
           async function  getProvider() {
               const response = await axios.get(`http://localhost:3000/company/retrieve`)
              setData(response.data.data)
               console.log(response.data.data)
           
               console.log(response)
           }

           getProvider();
    },[])

    const handleLogOut = () => {
      logOut()
      navigate("/")
    }

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredData = data.filter((item) => {
      return (
        item.service_provider?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        item.type_service?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );
    });

    const selectEducation = () => {

    }

    const  selectHealth = () => {

    }
    const selectHotel = () => {

    }

    const selectAgency  = () => {
      
    }

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

        
       <button className='hover:text-blue-600' onClick={handleLogOut}>logOut</button>
     <img src={avatar} alt="avatar" className="  h-auto w-[50px] sm:w-[50px] "/>
     </div>
    </div>

    <div  className='mt-28 '> 
        <h1 className='text-5xl font-bold text-center'>What do you need?</h1>


        <div className='flex md:gap-16 gap-4 flex-wrap px-3 mt-20  text-xl  items-center justify-center'>
            <button onClick={selectEducation} className='flex gap-1 hover:text-blue-600 justify-center items-center'><IoSchool /><span>Education</span></button>
            <button onClick={selectHotel} className='flex gap-1 hover:text-blue-600 justify-center items-center'><MdOutlineHotel /><span>Hotels</span></button>
            <button onClick={selectHealth} className='flex gap-1 hover:text-blue-600 justify-center items-center'><MdOutlineLocalHospital /><span>Health</span></button>
            <button onClick={selectAgency} className='flex gap-1 hover:text-blue-600 justify-center items-center'><MdCarRental /> <span>Agencies</span></button>
        </div>


        <div className='text-center relative w-auto m-6'>  
 <input type="text"
  placeholder='information about a provider , a service, updates?...'
  onChange={handleSearch}
    value={searchTerm}
    className='border-[2px] md:w-[40%] sm:w-[70%] w-[85%] text-md p-3 rounded-3xl '
  />
    
    <button className='bg-blue-600 p-2 px-5 top-[0.3rem] absolute right-[9%] sm:right-[16%] md:right-[30.5%] rounded-3xl text-white'>Search</button>
        </div>
    </div>
    
   <div className='flex gap-10 justify-center items-center p-10 px-10 flex-wrap'>
    {/* <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card /> */}
{filteredData.length > 0 ? (
  filteredData.map((provider) => {
    return <Card provider={provider} />;
  })
) : (
  data.map((provider) => {
    return <Card provider={provider} />;
  })
)}



    </div>
    </div>
  )
}

export default SearchPage