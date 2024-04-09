/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Signup.css";
import logo from "../../assets/logo.jpg";
import PolygonSign from "../../assets/PolygonSign.svg";
import man from "../../assets/man.png";

const Login = () => {
  const initialState = {
    password: "",
    email: "",
    username: "",
  };
  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className=" p-8">
      <img
        src={PolygonSign}
        className="absolute h-screen w-[50%] hidden sm:block   rot top-0 right-0 -z-10"
        alt="polygon"
      />
      <img
        src={logo}
        alt="logo"
        className=" ml-[5%] h-auto w-[13vw] sm:w-[70px] xl:ml-[14%]"
      />

      <div className="flex md:gap-x-28 justify-center">
        <form
          action=""
          className="flex  flex-col text-center shadow-sm mt-7 gap-y-8"
        >
          <h3 className="font-semibold text-blue-700 mb-16 text-3xl">Signup</h3>
          <input
            type="text"
            className="sm:text-2xl text-xl focus:ring-0 focus:outline-none focus:border-blue-900 py-4 border-b-2 border-neutral-400"
            placeholder="Password"
            value={data.username}
            onChange={handleChange}
          />
          <input
            type="text"
            className="sm:text-2xl focus:ring-0 focus:outline-none focus:border-blue-900 text-xl py-4 border-b-2 border-neutral-400"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
          <input
            type="text"
            className="sm:text-2xl focus:ring-0 focus:outline-none focus:border-blue-900 text-xl py-4  border-b-2 border-neutral-400"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />

          <button className="text-white bg-blue-500 text-2xl p-3 rounded-md font-semibold">
            Signup
          </button>
          <button className="p-e text-sky-950 border-[3px] border-blue-900 bg-white sm:text-2xl text-xl p-3 rounded-md font-semibold">
            Signup with google
          </button>

          <p>
            have an existing account{" "}
            <button className="text-blue-600"> Login</button>
          </p>
        </form>
        <img
          src={man}
          alt="people"
          className="w-[40%] min-w-[300px] hidden sm:block  h-[80vh]"
        />
      </div>
    </div>
  );
};

export default Login;
