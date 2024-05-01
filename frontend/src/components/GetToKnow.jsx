/* eslint-disable no-unused-vars */
import React from "react";

import { useNavigate } from "react-router-dom";
import { useCountStore } from "../store";

const GetToKnow = () => {

  
  const { isAuthenticated } = useCountStore()
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-[90%] m-auto bg-gradient-to-b from-[#6675f7] to-[#ddd] flex flex-col rounded-[50px] mt-20 py-12 justify-center items-center">
        <p className="text-white font-['Poppins'] text-[20px] lg:text-[40px] w-4/5 m-auto font-semibold text-center">
          Tell clients what you need them to know about your service.
        </p>
        <p className="text-white font-['Poppins'] text-[20px] lg:text-[40px] w-4/5 m-auto font-semibold text-center">
          Get to know the essential information you need about a service!
        </p>
        <div className="flex flex-col w-1/2 md:flex-row">
          <button onClick={() => {isAuthenticated  && navigate("/registrationProcess")}} className="bg-[#2871FF] mt-4 hover:bg-blue-800 text-white w-[160px] h-[50px] m-auto rounded-[20px]">
            Register
          </button>
          <button onClick={() => {navigate('/searchPage')}} className="bg-[#2871FF] mt-4 hover:bg-blue-800 text-white w-[160px] h-[50px] m-auto rounded-[20px]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetToKnow;
