/* eslint-disable no-unused-vars */
import React from "react";
import photo2 from "../assets/photo2.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const ForServiceProviders = () => {
  return (
    <div>
      <h1 className="md:text-[40px] sm:text-[35px] text-[30px] lg:text-[50px] font-bold font-['Inter'] m-auto mt-12 text-center">
        FastInfo for service providers
      </h1>
      <div className="grid lg:grid-cols-2 mt-24 px-16 relative">
        <div className="grid">
          <img src={photo2} alt="/" className="lg:absolute  top-0 -z-10" />
          <div className="bg-gradient-to-br from-[#4f5ac4] to-[#d5d6da] w-[150px] h-[150px] rounded-full relative float-right right-24 lg:mt-96"></div>
        </div>
        <div className="flex flex-col lg:pt-28 -z-20">
          <div className="flex">
            <FaLongArrowAltRight />
            <p className="font-['Poppins'] md:text-[15px] sm:text-[14px] text-[12px] lg:text-[16px] w-4/5 m-auto">
              Advertise your institution by telling the world who you are, what
              you have for them and how to work with you!
            </p>
          </div>
          <div className="flex mt-8">
            <FaLongArrowAltRight />
            <p className="font-['Poppins'] md:text-[15px] sm:text-[14px] text-[12px] lg:text-[16px] w-4/5 m-auto">
              Easily connect with client, tell them the update about the
              institution, make them know what they should know about the
              service they want!
            </p>
          </div>
          <div className="flex mt-8">
            <FaLongArrowAltRight />
            <p className="font-['Poppins'] md:text-[15px] sm:text-[14px] text-[12px] lg:text-[16px] w-4/5 m-auto">
              Be able to leave a special message that could help people who come
              to you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForServiceProviders;
