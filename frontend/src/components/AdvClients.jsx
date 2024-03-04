/* eslint-disable no-unused-vars */
import React from "react";
import fast from "../assets/dashboard-fast.jpg";
import perfect from "../assets/dashboard-perfect.jpg";

const AdvClients = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:mt-56 mt-24">
        <div className="flex flex-col">
          <img src={fast} alt="/" className="w-[112px] h-[105px] m-auto" />
          <h1 className="font-['Inter'] md:text-[40px] sm:text-[30px] lg:text-[54px] font-bold  m-auto">
            Fast
          </h1>
          <p className="font-['Poppins'] m-auto">
            Create a Business Profile at no cost
          </p>
        </div>
        <div className="flex flex-col">
          <img src={perfect} alt="/" className="w-[112px] h-[115px] m-auto" />
          <h1 className="font-['Inter'] md:text-[40px] sm:text-[30px] lg:text-[54px] font-bold m-auto">
            Perfect
          </h1>
          <p className="font-['Poppins'] m-auto">
            Easy to use and user-friendly
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvClients;
