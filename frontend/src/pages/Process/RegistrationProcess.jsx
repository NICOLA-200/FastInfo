// import React from 'react'
import { useState } from "react"
import MinHeader from "../../components/RegisterProcess/MinHeader"

import Step1 from "../../components/RegisterProcess/Step1.jsx"
import Step2 from "../../components/RegisterProcess/Step2.jsx"
import Step3 from "../../components/RegisterProcess/Step3.jsx"
import Step4 from "../../components/RegisterProcess/Step4.jsx"
import Step5 from "../../components/RegisterProcess/Step5.jsx"
import { useMultistepForm } from "../../hooks/useMultistepForm.js"
import { IoMdArrowBack } from "react-icons/io"
import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios"
import  Loading from "../../components/loader/Loading.jsx"
// import  { useCountStore } from '../../store.js'
import { useCountStore } from "../../store.js"
import { useNavigate } from "react-router-dom"



const  INITIAL_DATA = {

  service_provider: "",
  type_service: "",
  provider_description: "",
  profile_picture: "",
  profile_file:null,

  service_name:"",
  service_requirement:"",
  service_description:"",

  product_name:"",
  product_requirement:"",
  product_description:"",

  role_name:"",
  role_requirement:"",
  role_description:"",

  city:"",
  country:"",
  location: {
      latitude:29.7,
      longitude:-1.3,
  },


  phone_number: "",
  email: "",
  website: ""

}



function AboutModala() {
  const {  id }  = useCountStore();
  const [data, setData] = useState(INITIAL_DATA);
  const [isloading, setIsloading ]  = useState(false);
  const [success ,  setSuccess] =  useState(false)

  const navigate = useNavigate();

  function updateFields(fields) {
    setData(prev => {
     return {...prev, ...fields} 
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isLastStep) return next();

    setIsloading(true);

    try {
       
         const formData  =  new FormData();
        // formData.append("about", JSON.stringify({name: data.service_provider, category: data.type_service, description: data.provider_description}));
        // formData.append("service", JSON.stringify({serviceName: data.service_name, requirement: data.service_requirement, serviceDescription: data.service_description}));
        // formData.append("product", JSON.stringify({productName: data.product_name, requirement: data.product_requirement, productDescription: data.product_description}));
        // formData.append("role", JSON.stringify({roleName: data.role_name, requirement: data.role_requirement, roleDescription: data.role_description}));
        // formData.append("address", JSON.stringify({country: data.country, city: data.city, geolocation: data.location}));
        // formData.append("contact", JSON.stringify({phone: data.phone, email: data.email, website: data.website}));
        console.log(data)
        formData.append("profile_file", data.profile_file)

        const requestData = {
          ...data,
          id,
          profile_picture: undefined,
          profile_file: null // Or you can set it to null, '', or omit it entirely
        };
        formData.append("data", JSON.stringify(requestData))
         
        const responseData  = await axios.post("http://localhost:3000/company/create",formData, {withCredentials:true} );
        // const responseData  = await axios.post("http://localhost:300/",formData, {withCredentials:true} );

        console.log(responseData);
    } catch (error) {
        console.error("Error submitting form:", error);
        // Handle error state or display error message to the user
    } finally {
        setIsloading(false);

        setSuccess(true)
        setTimeout(() => {
          setSuccess(false)
          // navigate("/Profile")
        },1000)

        // setData(INITIAL_DATA)

        

        
    }
};


  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
   useMultistepForm([
      <Step1 {...data} updateFields={updateFields} />,
      <Step2 {...data} updateFields={updateFields} />,
      <Step3  {...data} updateFields={updateFields}/>,
      <Step4  {...data} updateFields={updateFields}/>,
      <Step5  {...data} updateFields={updateFields}/>,
   ])
  return (
    <div className=" bg-[#E2E2E2] w-full h-screen">
       <MinHeader />
      <form action="" onSubmit={onSubmit} className="">
      {step}
      <ProgressBar className="absolute left-[30%] top-[26vh]" maxCompleted={5} width="35vw" height="5px" customLabel=" " bgColor="#488CF2" completed={currentStepIndex + 1} />;
      {!isFirstStep && (
      <IoMdArrowBack size={27} onClick={back} className="hover:text-neutral-600 absolute left-[22.5%] sm:left-[24%] md:left-[27%]   top-[24vh] sm:top-[25vh]"/>
    )}
    <button  className="absolute left-[65%] text-white p-1 px-4 hover:bg-blue-800 top-[80vh] bg-blue-600 border-[2px] rounded-md">
  {isloading ? <Loading /> : (isLastStep ? "Finish" : "Next")}
</button>
   
   {success && <span className="text-green-600 absolute left-[30%] top-[80vh] font-semibold">created successfully</span>}

      </form>
      </div>
  )
}

export default AboutModala