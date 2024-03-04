/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-[#D8D9E6] p-12 flex flex-col md:flex-row md:flex items-center justify-center mt-12">
        <a href="#">
          <img
            src={logo}
            alt="/"
            className="relative md:float-left md:right-12 lg:right-40 top-0 md:-top-6 mb-4 md:mb-0"
          />
        </a>
        <div className="grid md:grid-cols-3">
          <div className="flex flex-col md:mr-8">
            <h1 className="font-['Inter'] text-[25px] font-bold">
              For Providers
            </h1>
            <p className="font-['Poppins']">
              <a href="#">How it works?</a>
            </p>
          </div>
          <div className="flex flex-col md:mx-4">
            <h1 className="font-['Inter'] text-[25px] font-bold">Resources</h1>
            <p className="font-['Poppins']">
              <a href="#">Help</a>
            </p>
            <p className="font-['Poppins']">
              <a href="#">Why us?</a>
            </p>
          </div>
          <div className="flex flex-col md:ml-8">
            <h1 className="font-['Inter'] text-[25px] font-bold">FastInfo</h1>
            <p className="font-['Poppins']">
              <a href="#">What is?</a>
            </p>
            <p className="font-['Poppins']">
              <a href="#">Contact</a>
            </p>
            <p className="font-['Poppins']">
              <a href="#">Our team</a>
            </p>
          </div>
        </div>
      </div>
      <p className="bg-[#D8D9E6] text-center w-full font-['Poppins'] px-4">
        2024 @ FastInfo - All rights reserved -{" "}
        <a href="#" className="text-[#2871FF]">
          Terms of use
        </a>{" "}
        -{" "}
        <a href="#" className="text-[#2871FF]">
          Privacy policy
        </a>
      </p>
    </div>
  );
};

export default Footer;
