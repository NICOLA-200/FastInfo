/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../assets/logo.jpg";
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";
import easy from "../../assets/dashboard-easy.jpg";
import free from "../../assets/dashboard-free.jpg";
import fast from "../../assets/dashboard-fast.jpg";
import perfect from "../../assets/dashboard-perfect.jpg";
import personales from "../../assets/dashboard-personales.jpg";
import "./dashboard.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Dashboard = () => {
  const headerlist = [
    { title: "Resources", link: "#resources" },
    { title: "FAQs", link: "#faqs" },
    { title: "Support", link: "#support" },
  ];
  console.log(headerlist);
  return (
    <div className="flex flex-col">
      <div className="flex w-full overflow-x-hidden p-8">
        <img src={logo} alt="Logo" className="w-[100px] h-[53px]" />
        <ul className='flex m-auto font-["Inter"] font-normal text-[20px]'>
          {headerlist.map((item, id) => (
            <li key={item.id} className="px-6">
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button className='border-[1px] rounded-[30px] border-[#0024FB] border-solid w-[160px] h-[60px] bg-white text-[#0024FB] font-["Inter"] font-bold'>
          SIGN IN
        </button>
      </div>
      <div className="w-full overflow-x-hidden p-16 grid grid-cols-2">
        <div className="flex flex-col">
          <h1 className="text-[54px] font-['Inter'] w-[75%] font-bold">
            Get the <span className="text-[#0A0D5C]">service</span> you need{" "}
            <span className="text-[#080EAC]">easily</span> and{" "}
            <span className="text-[#0024FB]">faster</span>
          </h1>
          <p className="font-['Poppins'] text-[20px] w-3/4">
            Use us to describe and search your needs and get the provider you
            need.
          </p>
          <p className="font-['Poppins'] mt-4 text-[20px] w-3/4 pt-8">
            Register as a provider and get in touch with the clients that need
            you, and that you need
          </p>
        </div>

        <img src={photo3} alt="/" />
      </div>
      <div className="grid grid-cols-2 px-32">
        <div className="flex flex-col">
          <h1 className="text-[36px] font-bold leading-[44px] m-auto">
            Register a provider
          </h1>
          <p className="font-['Poppins'] w-2/3 text-[16px] mt-4 m-auto">
            Register an organization, institution, business, company, agency, or
            center, so that people may search for you here and see the update
          </p>
          <button className="bg-[#2871FF] mt-4 text-white w-[160px] h-[50px] m-auto rounded-[20px]">
            Register
          </button>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[36px] font-bold leading-[44px] font-['Inter'] m-auto mt-4">
            Need a service
          </h1>
          <p className="font-['Poppins'] w-2/3 text-[16px] mt-4 m-auto">
            Search for a service , meet all possible provider, and see the info
            you need about the service.
          </p>
          <button className="bg-[#2871FF] mt-4 text-white w-[160px] h-[50px] m-auto rounded-[20px]">
            Search
          </button>
        </div>
      </div>
      <h1 className="text-[50px] font-bold font-['Inter'] m-auto mt-12">
        FastInfo for service providers
      </h1>
      <div className="grid grid-cols-2 mt-24 px-16 relative">
        <div>
          <img src={photo2} alt="/" className="absolute z-[999] top-0" />
          <div className="bg-gradient-to-br from-[#4f5ac4] to-[#d5d6da] w-[150px] h-[150px] rounded-full relative float-right right-24 mt-96"></div>
        </div>
        <div className="flex flex-col pt-28">
          <div className="flex">
            <FaLongArrowAltRight />
            <p className="font-['Poppins'] text-[16px] w-4/5 m-auto">
              Advertise your institution by telling the world who you are, what
              you have for them and how to work with you!
            </p>
          </div>
          <div className="flex mt-8">
            <FaLongArrowAltRight />
            <p className="font-['Poppins'] text-[16px] w-4/5 m-auto">
              Easily connect with client, tell them the update about the
              institution, make them know what they should know about the
              service they want!
            </p>
          </div>
          <div className="flex mt-8">
            <FaLongArrowAltRight />
            <p className="font-['Poppins'] text-[16px] w-4/5 m-auto">
              Be able to leave a special message that could help people who come
              to you!
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 m-auto mt-12">
        <div className="flex flex-col">
          <img src={free} alt="/" className="w-[70px] h-[79px]  m-auto" />
          <h1 className="font-['Inter'] text-[54px] font-bold  m-auto">Free</h1>
          <p className="font-['Poppins'] m-auto">
            Create a Business Profile at no cost
          </p>
        </div>
        <div className="flex flex-col">
          <img src={easy} alt="/" className="w-[79px] h-[79px]  m-auto" />
          <h1 className="font-['Inter'] text-[54px] font-bold m-auto">Easy</h1>
          <p className="font-['Poppins'] m-auto">
            Easy to use and user-friendly
          </p>
        </div>
        <div className="flex flex-col">
          <img src={personales} alt="/" className="w-[65px] h-[67px]  m-auto" />
          <h1 className="font-['Inter'] text-[54px] font-bold  m-auto">
            Personales
          </h1>
          <p className="font-['Poppins'] m-auto">Add facts, photos and more!</p>
        </div>
      </div>
      <h1 className="text-[50px] font-bold font-['Inter'] m-auto mt-12">
        FastInfo for clients
      </h1>
      <div className="grid grid-cols-2 mt-24 px-16 relative">
        <div className="flex flex-col pt-28">
          <div className="flex">
            <FaLongArrowAltRight />
            <p className="font-['Poppins'] text-[16px] w-4/5 m-auto">
              Advertise your institution by telling the world who you are, what
              you have for them and how to work with you!
            </p>
          </div>
          <div className="flex mt-8">
            <FaLongArrowAltRight />
            <p className="font-['Poppins'] text-[16px] w-4/5 m-auto">
              Easily connect with client, tell them the update about the
              institution, make them know what they should know about the
              service they want!
            </p>
          </div>
          <div className="flex mt-8">
            <FaLongArrowAltRight />
            <p className="font-['Poppins'] text-[16px] w-4/5 m-auto">
              Be able to leave a special message that could help people who come
              to you!
            </p>
          </div>
        </div>
        <div>
          <img src={photo1} alt="/" className="absolute z-[999] top-0 ml-12" />
          <div className="bg-gradient-to-br from-[#4f5ac4] to-[#d5d6da] w-[150px] h-[150px] rounded-full relative float-left mt-96"></div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 mt-12">
        <div className="flex flex-col">
          <img src={fast} alt="/" className="w-[112px] h-[105px] m-auto" />
          <h1 className="font-['Inter'] text-[54px] font-bold  m-auto">Fast</h1>
          <p className="font-['Poppins'] m-auto">
            Create a Business Profile at no cost
          </p>
        </div>
        <div className="flex flex-col">
          <img src={perfect} alt="/" className="w-[112px] h-[115px] m-auto" />
          <h1 className="font-['Inter'] text-[54px] font-bold m-auto">
            Perfect
          </h1>
          <p className="font-['Poppins'] m-auto">
            Easy to use and user-friendly
          </p>
        </div>
      </div>
      <div className="w-[90%] m-auto bg-gradient-to-b from-[#6675f7] to-[#7f8286] flex flex-col rounded-[100px] mt-20 py-12 justify-center items-center">
        <p className="text-white font-['Poppins'] text-[40px] w-4/5 m-auto font-semibold text-center">
          Tell clients what you need them to know about your service.
        </p>
        <p className="text-white font-['Poppins'] text-[40px] w-4/5 m-auto font-semibold text-center">
          Get to know the essential information you need about a service!
        </p>
        <div className="flex flex-col w-1/2 md:flex-row">
          <button className="bg-[#2871FF] mt-4 font-semibold font-['Poppins'] text-white w-[160px] m-auto h-[50px] rounded-[20px]">
            Register
          </button>
          <button className="bg-[#2871FF] mt-4 font-semibold font-['Poppins'] text-white w-[160px] m-auto h-[50px] rounded-[20px]">
            Search
          </button>
        </div>
      </div>
      <div className="w-full bg-[#D8D9E6] p-12 flex items-center justify-center">
        <img
          src={logo}
          alt="/"
          className="relative float-left right-40 -top-6"
        />
        <div className="grid grid-cols-3">
          <div className="flex flex-col mr-8">
            <h1 className="font-['Inter'] text-[25px] font-bold">
              For Providers
            </h1>
            <p className="font-['Poppins']">How it works?</p>
          </div>
          <div className="flex flex-col mx-4">
            <h1 className="font-['Inter'] text-[25px] font-bold">Resources</h1>
            <p className="font-['Poppins']">Help</p>
            <p className="font-['Poppins']">Why us?</p>
          </div>
          <div className="flex flex-col ml-8">
            <h1 className="font-['Inter'] text-[25px] font-bold">FastInfo</h1>
            <p className="font-['Poppins']">What is?</p>
            <p className="font-['Poppins']">Contact</p>
            <p className="font-['Poppins']">Our team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
