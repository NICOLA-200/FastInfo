/* eslint-disable no-unused-vars */
import React from "react";

const GetToKnow = () => {
  return (
    <div>
      <div className="w-[90%] m-auto bg-gradient-to-b from-[#6675f7] to-[#7f8286] flex flex-col rounded-[100px] mt-20 py-12 justify-center items-center">
        <p className="text-white font-['Poppins'] text-[20px] lg:text-[40px] w-4/5 m-auto font-semibold text-center">
          Tell clients what you need them to know about your service.
        </p>
        <p className="text-white font-['Poppins'] text-[20px] lg:text-[40px] w-4/5 m-auto font-semibold text-center">
          Get to know the essential information you need about a service!
        </p>
        <div className="flex flex-col w-1/2 md:flex-row">
          <button className="bg-[#2871FF] mt-4 font-semibold font-['Poppins'] text-md text-white px-9 py-2 sm:px-12 m-auto sm:py-3  rounded-[20px]">
            Register
          </button>
          <button className="bg-[#2871FF] mt-4 font-semibold font-['Poppins'] text-md text-white px-9 py-2 sm:px-12 m-auto sm:py-3  rounded-[20px]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetToKnow;
