/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Signup.css";
import logo from "../../assets/logo.jpg";
import PolygonSign from "../../assets/PolygonSign.svg";
import man from "../../assets/man.png";
import { GoogleLogin } from '@react-oauth/google';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import  Loading from "../../components/loader/Loading"
import axios from "axios";
import { useCountStore } from "../../store";
import  { jwtDecode } from "jwt-decode"


const Login = () => {
  const initialState = {
    password: "",
    email: "",
    username: "",
  };
  const [data, setData] = useState(initialState);
  const [isloading, setIsloading ]  = useState(false);
  const navigate   = useNavigate();
  const { signUp }  = useCountStore(); 

  const handleChange = (e) => {
    console.log(e.target.value)
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data.username)
  };

  const handleSubmit   = async (e) => {
    e.preventDefault()
    setIsloading(true)

    signUp(data)
    navigate("/")
    
  }

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
        onSubmit={handleSubmit}
          action=""
          className="flex  border-[2px]  px-12 rounded-md shadow-md shadow-neutral-700 flex-col text-center  mt-7 gap-y-8"
        >
          <h3 className="font-semibold text-blue-700 mb-10 text-3xl">Signup</h3>
          <input
            type="text"
            className="sm:text-2xl text-xl focus:ring-0 focus:outline-none focus:border-blue-900 py-4 border-b-2 border-neutral-400"
            placeholder="username"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
          <input
            type="text"
            className="sm:text-2xl focus:ring-0 focus:outline-none focus:border-blue-900 text-xl py-4 border-b-2 border-neutral-400"
            placeholder="Email"
            value={data.email}
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            className="sm:text-2xl focus:ring-0 focus:outline-none focus:border-blue-900 text-xl py-4  border-b-2 border-neutral-400"
            placeholder="Password"
            value={data.password}
            name="password"
            onChange={handleChange}
          />

          <button className="text-white bg-blue-500 text-2xl p-3 rounded-md font-semibold hover:bg-blue-900">
            Signup
          </button>
          <button className="p-e text-sky-950 border-[3px] border-blue-900 bg-white sm:text-2xl text-xl p-3 rounded-md font-semibold">
            <GoogleLogin width={240}
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    console.log()
    localStorage.setItem('token',credentialResponse.credential)
    const data2 = jwtDecode(credentialResponse.credential)
    const dat  = {
      email: data2.email,
       username: data2.given_name
    } 
    signUp(dat)
    // navigate('/')
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
          </button>

          <p>
            have an existing account{" "}
            <button className="text-blue-600 hover:underline hover:text-blue-900" onClick={() => {navigate("/Login")}}> Login</button>
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
