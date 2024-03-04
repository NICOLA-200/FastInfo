/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const headerlist = [
    { id: 0, title: "Resources", link: "#resources" },
    { id: 1, title: "FAQs", link: "#faqs" },
    { id: 2, title: "Support", link: "#support" },
  ];
  return (
    <div>
      <div className="flex w-full overflow-x-hidden p-8">
        <img src={logo} alt="Logo" className="w-[100px] h-[53px]" />
        <div className="md:flex m-auto w-full hidden">
          <ul className='flex m-auto font-["Inter"] font-normal text-[20px]'>
            {headerlist.map((item) => (
              <li key={item.id} className="px-6">
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
          <button className='border-[1px] rounded-[30px] float-left border-[#0024FB] border-solid w-[160px] h-[60px] bg-white text-[#0024FB] font-["Inter"] font-bold'>
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
