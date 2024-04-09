// import React from "react";
import MinHeader from "../../components/RegisterProcess/MinHeader";
import StartPolygon1 from "../../assets/StartPolygon1.svg";
import StartPolygon2 from "../../assets/StartPolygon2.svg";

function Startup() {
  
  return (
    <div className="overflow-hidden h-[100vh] ">
      <img
        src={StartPolygon2}
        className="fixed h-[100%] object-cover w-auto right-0  "
        alt="start polygon1"
      />
      <MinHeader />
      <div className="flex items-center justify-center flex-col space-y-16 px-[5%] sm:px-[20%] h-full">
        <p className="font-bold text-center text-3xl">
          Ready to get in touch with client? Start buliding your service
          provider profile.
        </p>
        <p className=" text-center text-3xl">
          {" "}
          Click start to start the registration process.
        </p>
        <p className=" text-center ">
          {" "}
          By continuing, you’re agreeing to these{" "}
          <span className="text-blue-700 underline">
            {" "}
            Terms of Service{" "}
          </span>{" "}
          and <span className="text-blue-700 underline"> Privacy Policy</span>
        </p>
        <button  className="font-bold hover:bg-blue-800 text-white bg-blue-500 p-3 text-2xl px-6 rounded-lg">
          Start
        </button>
      </div>
      <img
        src={StartPolygon1}
        alt="start polygon1"
        className="fixed h-[50vw] w-auto left-0 bottom-0"
      />
    </div>
  );
}

export default Startup;
