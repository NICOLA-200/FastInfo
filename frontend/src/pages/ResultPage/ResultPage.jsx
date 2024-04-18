import React, { useState } from "react";

import logo from "../../assets/logo.jpg";
import avatar from "../../assets/avatar.png";

import school from "../../assets/school.png";

import map from "../../assets/map.png";

import { MdOutlineContacts } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAnnouncement } from "react-icons/md";
// import { FaQuestionCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdownCircle } from "react-icons/io";

import { FaEarthAfrica } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

import { Card } from "../../components";

import { IoMdMenu } from "react-icons/io";

function ResultPage() {
  const [showDrop, setShowDrop] = useState(false);
  const [showDetails, setShowDetails] = useState();

  const showDropDown = () => {
    setShowDrop((prev) => !prev);
  };

  return (
    <div>
      {/* header */}
      <div className="flex z-10    justify-between items-center bg-white p-2 px-6 w-screen sticky top-0 shadow-md shadow-neutral-300 ">
        <img src={logo} alt="logo" className=" h-auto w-[60px]  " />

        <div className="text-center relative w-[500px] hidden sm:block">
          <input
            type="text"
            placeholder="information about a provider , a service, updates?..."
            onChange={() => {}}
            value=""
            className="border-[2px] md:w-[100%] sm:w-[70%] w-[85%] text-md p-3 rounded-3xl "
          />

          <button className="bg-blue-600 p-2 px-5 top-[0.3rem] absolute right-[9%] sm:right-[16%] md:right-1 rounded-3xl text-white">
            Search
          </button>
        </div>

        <div className="sm:flex md:gap-10 gap-3 mr-3  hidden">
          <button>Help</button>
          <button>Guide</button>
          <button>Explore</button>
        </div>

        <div className="flex md:gap-10 gap-5 items-center">
          {/* drop down menu */}
          <button className="sm:hidden text-xl" onClick={showDropDown}>
            {" "}
            <IoMdMenu />
          </button>
          {showDrop && (
            <div className="absolute text-center  w-[80vw] h-[30vh] bg-white top-16  left-10 shadow-md shadow-black">
              <div className="flex flex-col gap-3 my-6">
                <button>Help</button>
                <button>Guide</button>
                <button>Explore</button>
              </div>

              <div className="text-center relative w-full mr-3">
                <input
                  type="text"
                  placeholder="information about a provider , a service, updates?..."
                  onChange={() => {}}
                  value=""
                  className="border-[2px] md:w-[100%] sm:w-[70%] w-[85%] text-md p-3 rounded-3xl "
                />

                <button className="bg-blue-600 p-2 px-5 top-[0.3rem] absolute right-[9%] sm:right-[16%] md:right-1 rounded-3xl text-white">
                  Search
                </button>
              </div>
            </div>
          )}

          <img
            src={avatar}
            alt="avatar"
            className="  h-auto w-[50px] sm:w-[50px] "
          />
        </div>
      </div>

      {/* content */}
      <div className="flex justify-center items-center">
        <div className=" sm:px-10 justify-center items-center relative -top-[55rem]  flex flex-col  bg-[#FaFaFF] ">
          <div className="w-[37%] min-w-[320px]   border-[2px] pb-10 flex flex-col gap-5 shadow-sm  rounded-xl overflow-clip ">
            <img
              src={school}
              alt=""
              className="w-full h-[50vh] object-contain bg-slate-800 "
            />
            <h1 className="text-xl font-bold ml-7">
              Nyakinama Secondary School
            </h1>
            <h3 className="ml-7">High school</h3>
            <ul className="flex w-full justify-around px-2">
              <li>
                <button className="flex flex-col-reverse p-2 text-blue-500 items-center justify-center hover:border-b-[2px] border-blue-700">
                  <span>About</span>
                  <MdOutlineContacts />
                </button>
              </li>
              <li>
                <button className="flex flex-col-reverse p-2 text-blue-500 items-center justify-center hover:border-b-[2px] border-blue-700">
                  <span>services</span>
                  <MdMiscellaneousServices />
                </button>
              </li>
              <li>
                <button className="flex flex-col-reverse p-2 text-blue-500 items-center justify-center hover:border-b-[2px] border-blue-700">
                  <span>Contact</span>
                  <BsFillTelephoneFill />
                </button>
              </li>
              <li>
                <button className="flex flex-col-reverse p-2 text-blue-500 items-center justify-center hover:border-b-[2px] border-blue-700">
                  <span>Announcement</span>
                  <MdAnnouncement />
                </button>
              </li>
              <li>
                <button className="flex flex-col-reverse p-2 text-blue-500 items-center justify-center hover:border-b-[2px] border-blue-700">
                  <span>Location</span>
                  <FaLocationDot />
                </button>
              </li>
            </ul>
          </div>

          <div className="flex  gap-7 px-5 flex-col h-[80vh] ">
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl font-bold">Rwanda Coding Academy</h1>
              <h2 className="">Education , high school</h2>

              <p className="md:w-[70%]">
                A software development school is an educational institution
                focused on providing comprehensive and practical training in the
                field of software development. These schools aim to equip
                students with the necessary skills and knowledge to become
                proficient software developers. The curriculum typically covers
                programming
              </p>

              <div className="relative border-[1px] border-blue-900 rounded-sm p-3 h-16 w-[50%] text-blue-700">
                <h1>seeking new student </h1>{" "}
                <button className="text-sm absolute bottom-1 right-2">
                  read more
                </button>
              </div>
            </div>

            <div>
              <h1 className="font-bold text-3xl">
                <button className="hover:border-b-[2px] p-3 border-blue-700 ">
                  Services{" "}
                </button>{" "}
                &{" "}
                <button className="hover:border-b-[2px] p-3 border-blue-700 ">
                  {" "}
                  Products
                </button>{" "}
                &{" "}
                <button className="hover:border-b-[2px] p-3 border-blue-700 ">
                  Role{" "}
                </button>
              </h1>

              <div className="pt-10">
                <h2 className="font-bold">Service</h2>

                <div className="flex flex-col md:w-[70%]  bg-white border-[1px] rounded-md">
                  <div className="flex  px-3 border-neutral-700 w-full  p-5 ">
                    <div className="flex justify-between w-full">
                      <h1>SOD(Software development)</h1>
                      <button
                        onClick={() => {
                          setShowDetails(!showDetails);
                        }}
                        className="text-neutral-700 hover:text-slate-800 font-semibold flex items-center gap-2"
                      >
                        <span>show details</span>
                        <IoMdArrowDropdownCircle />
                      </button>{" "}
                    </div>
                  </div>
                  {showDetails && (
                    <div className="bg-slate-100 space-y-6 p-3">
                      <div className="space-y-7">
                        <h1 className="font-semibold">Description</h1>

                        <p>
                          Software development education encompasses the
                          learning and acquisition of skills related to
                          designing, creating, testing, and maintaining software
                          applications.
                        </p>
                      </div>

                      <div className="space-y-7">
                        <h1 className="font-semibold">Requirement</h1>

                        <div className="space-y-4">
                          <p>8 in national o level exam</p>
                          <p>new student 80 000 FRW</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-10">
                <h2 className="font-bold">Product</h2>

                <div className="flex flex-col md:w-[70%]  bg-white border-[1px] rounded-md">
                  <div className="flex  px-3 border-neutral-700 w-full  p-3">
                    <div className="flex justify-between w-full">
                      <h1>SOD(Software development)</h1>
                      <button
                        onClick={() => {
                          setShowDetails(!showDetails);
                        }}
                        className="text-neutral-700 hover:text-slate-800 font-semibold flex items-center gap-2"
                      >
                        <span>show details</span>
                        <IoMdArrowDropdownCircle />
                      </button>{" "}
                    </div>
                  </div>
                  <div className="bg-slate-100 space-y-6 p-3">
                    <div className="space-y-7">
                      <h1 className="font-semibold">Description</h1>

                      <p>
                        Software development education encompasses the learning
                        and acquisition of skills related to designing,
                        creating, testing, and maintaining software
                        applications.
                      </p>
                    </div>

                    <div className="space-y-7">
                      <h1 className="font-semibold">Requirement</h1>

                      <div className="space-y-4">
                        <p>8 in national o level exam</p>
                        <p>new student 80 000 FRW</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-10">
                <h2 className="font-bold">Role</h2>

                <div className="flex flex-col md:w-[70%]  bg-white border-[1px] rounded-md">
                  <div className="flex  px-3 border-neutral-700 w-full  p-3">
                    <div className="flex justify-between w-full">
                      <h1>SOD(Software development)</h1>
                      <button
                        onClick={() => {
                          setShowDetails(!showDetails);
                        }}
                        className="text-neutral-700 hover:text-slate-800 font-semibold flex items-center gap-2"
                      >
                        <span>show details</span>
                        <IoMdArrowDropdownCircle />
                      </button>{" "}
                    </div>
                  </div>
                  <div className="bg-slate-100 space-y-6 p-3">
                    <div className="space-y-7">
                      <h1 className="font-semibold">Description</h1>

                      <p>
                        Software development education encompasses the learning
                        and acquisition of skills related to designing,
                        creating, testing, and maintaining software
                        applications.
                      </p>
                    </div>

                    <div className="space-y-7">
                      <h1 className="font-semibold">Requirement</h1>

                      <div className="space-y-4">
                        <p>8 in national o level exam</p>
                        <p>new student 80 000 FRW</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10 ">
              <h1 className="font-bold text-2xl">Contact</h1>

              <div className="border-[2px] sm:w-[75%] gap-6 flex flex-col justify-center  p-2">
                <h2 className="flex gap-3 items-center">
                  <FaEarthAfrica /> Website: <span>www.rca.rw.ac</span>
                </h2>
                <h2 className="flex gap-3 items-center">
                  <MdEmail /> Email: <span>rcagmail.com</span>
                </h2>
                <h2 className="flex gap-3 items-center">
                  <FaPhoneAlt />
                  Phone: <span>0789654382</span>
                </h2>

                <button className="bg-blue-700 text-white p-2 font-bold text- px-7 rounded-md  w-[50%]">
                  Contact
                </button>
              </div>
            </div>

            <div className="space-y-14">
              <h1 className="font-bold text-2xl">Address</h1>
              <div className="space-y-5 ">
                <img src={map} className="w-[85%] h-[50vh]" alt="" />
                <span className="flex items-center">
                  {" "}
                  <FaLocationDot /> <span>Rwanda, Nyabihu</span>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 flex-col">
          <h1 className="text-[34px] font-bold w-[200%]">
            Similar Service providers
          </h1>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
