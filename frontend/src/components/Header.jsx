/* eslint-disable no-unused-vars */
import React from "react";
import photo3 from "../assets/photo3.jpg";

const Header = () => {
  return (
    <div>
      <div className="w-full overflow-x-hidden p-16 grid lg:grid-cols-2">
        <div className="flex flex-col">
          <h1 className="lg:text-[54px] md:text-[40px] sm:text-[35px] text-[30px] font-['Inter'] w-[75%] font-bold">
            Get the <span className="text-[#0A0D5C]">service</span> you need{" "}
            <span className="text-[#080EAC]">easily</span> and{" "}
            <span className="text-[#0024FB]">faster</span>
          </h1>
          <p className="font-['Poppins'] lg:text-[20px] md:text-[16px] sm:text-[15px] text-[14px] w-3/4">
            Use us to describe and search your needs and get the provider you
            need.
          </p>
          <p className="font-['Poppins'] mt-0 lg:mt-4 lg:text-[20px] md:text-[16px] sm:text-[15px] text-[14px] w-3/4 pt-8">
            Register as a provider and get in touch with the clients that need
            you, and that you need
          </p>
        </div>

        <img src={photo3} alt="/" />
      </div>
    </div>
  );
};

export default Header;
