/* eslint-disable no-unused-vars */
import React from "react";

const ServiceRegistration = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 px-8 sm:px-24 lg:px-32">
        <div className="flex flex-col">
          <h1 className="lg:text-[36px] md:text-[32px] sm:text-[28px] text-[25px] font-bold leading-[44px] m-auto text-center">
            Register a provider
          </h1>
          <p className="font-['Poppins'] w-2/3 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] mt-4 m-auto text-center">
            Register an organization, institution, business, company, agency, or
            center, so that people may search for you here and see the update
          </p>
          <button className="bg-[#2871FF] mt-4 text-white w-[160px] h-[50px] m-auto rounded-[20px]">
            Register
          </button>
        </div>
        <div className="flex flex-col">
          <h1 className="lg:text-[36px] md:text-[32px] sm:text-[28px] text-[25px] font-bold leading-[44px] font-['Inter'] m-auto mt-4">
            Need a service
          </h1>
          <p className="font-['Poppins'] w-2/3 text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] mt-4 m-auto">
            Search for a service , meet all possible provider, and see the info
            you need about the service.
          </p>
          <button className="bg-[#2871FF] mt-4 text-white w-[160px] h-[50px] m-auto rounded-[20px]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceRegistration;
