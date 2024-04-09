/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./login.css";
import logo from "../../assets/logo.jpg";
import PolygonLogin from "../../assets/PolygonLogin.svg";
import people from "../../assets/people.png";

const Login = () => {
  const initialState = {
    password: "",
    email: "",
  };
  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className=" p-8">
      <img
        src={PolygonLogin}
        className="absolute h-screen w-[50%] hidden sm:block  top-0 left-0 -z-10"
        alt="polygon"
      />
      <img
        src={logo}
        alt="logo"
        className=" ml-[5%] h-auto w-[13vw] sm:w-[70px] xl:ml-[14%]"
      />

      <div className="flex md:gap-x-28 justify-center">
        <img
          src={people}
          alt="people"
          className="w-[45%] min-w-[300px] hidden sm:block  h-auto"
        />

        <form
          action=""
          className="flex  flex-col text-center mt-7 shadow-sm gap-y-12"
        >
          <h3 className="font-semibold text-blue-700 mb-[5vw] sm:text-4xl text-3xl ">
            Login
          </h3>
          <input
            type="text"
            className="sm:text-2xl text-xl py-4  focus:ring-0 focus:outline-none focus:border-blue-900 border-b-2 border-neutral-400"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
          <input
            type="text"
            className="sm:text-2xl text-xl py-4 focus:ring-0 focus:outline-none focus:border-blue-900  border-b-2 border-neutral-400"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />

          <button className="text-white bg-blue-500  text-2xl p-3 rounded-md font-semibold">
            Login
          </button>
          <button className="p-e text-sky-950 border-[3px] border-blue-900 bg-white sm:text-2xl text-xl p-3 rounded-md font-semibold">
            Login with google
          </button>

          <p>
            Do not have an account?{" "}
            <button className="text-blue-600"> create one</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
