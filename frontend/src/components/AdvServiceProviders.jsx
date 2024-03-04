/* eslint-disable no-unused-vars */
import React from "react";
import easy from "../assets/dashboard-easy.jpg";
import free from "../assets/dashboard-free.jpg";
import personales from "../assets/dashboard-personales.jpg";

const AdvServiceProviders = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 m-auto mt-12">
        <div className="flex flex-col">
          <img src={free} alt="/" className="w-[70px] h-[79px] m-auto" />
          <h1 className="font-['Inter'] md:text-[40px] sm:text-[30px] lg:text-[54px] font-bold m-auto">
            Free
          </h1>
          <p className="font-['Poppins'] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[12px] m-auto">
            Create a Business Profile at no cost
          </p>
        </div>
        <div className="flex flex-col">
          <img src={easy} alt="/" className="w-[79px] h-[79px] m-auto" />
          <h1 className="font-['Inter'] md:text-[40px] sm:text-[30px] lg:text-[54px] font-bold m-auto">
            Easy
          </h1>
          <p className="font-['Poppins'] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[12px] m-auto">
            Easy to use and user-friendly
          </p>
        </div>
        <div className="flex flex-col mt-0 md:mt-6 lg:mt-0">
          <img src={personales} alt="/" className="w-[65px] h-[67px] m-auto" />
          <h1 className="font-['Inter'] md:text-[40px] sm:text-[30px] lg:text-[54px] font-bold m-auto">
            Personales
          </h1>
          <p className="font-['Poppins'] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[12px] m-auto">
            Add facts, photos and more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvServiceProviders;
