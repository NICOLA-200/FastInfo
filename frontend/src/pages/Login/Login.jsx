/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./login.css";
import logo from "../../assets/logo.jpg";
import PolygonLogin from "../../assets/PolygonLogin.svg";
import people from "../../assets/people.png";

import { GoogleLogin } from '@react-oauth/google';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import  Loading from "../../components/loader/Loading"
import axios from "axios";
import { useCountStore } from "../../store";

const Login = () => {
  const initialState = {
    password: "",
    email: "",
  };
  const [data, setData] = useState(initialState);
  const [isloading, setIsloading ]  = useState(false);
  const navigate   = useNavigate();
  const { logIn }  = useCountStore(); 

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit   = async (e) => {
    e.preventDefault()
    setIsloading(true)

    logIn(data)
    navigate("/")
    
  }


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
            onSubmit={handleSubmit}
          action=""
          className="flex border-[2px]  px-12 rounded-md shadow-md shadow-neutral-700 flex-col text-center mt-7 shadow-sm gap-y-12"
        >
          <h3 className="font-semibold text-blue-700 mb-[5vw] sm:text-4xl text-3xl ">
            Login
          </h3>
          <input
            type="text"
            className="sm:text-2xl text-xl py-4  focus:ring-0 focus:outline-none focus:border-blue-900 border-b-2 border-neutral-400"
            placeholder="Email"
            value={data.email}
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            className="sm:text-2xl text-xl py-4 focus:ring-0 focus:outline-none focus:border-blue-900  border-b-2 border-neutral-400"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />

          <button className="text-white bg-blue-500  text-2xl p-3 rounded-md font-semibold hover:bg-blue-900">
            Login
          </button>
          <button className="p-e text-sky-950 border-[3px] border-blue-900 bg-white sm:text-2xl text-xl p-3 rounded-md font-semibold">
          <GoogleLogin width={240}
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    localStorage.setItem('token',credentialResponse.credential)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
          </button>

          <p>
            Do not have an account?{" "}
            <button className="text-blue-600 hover:underline hover:text-blue-900" onClick={() => {navigate("/signup")}}> create one</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
