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



const  INITIAL_DATA = {

  service_provider: "",
  type_service: "",
  provider_description: "",
  profile_picture: "",

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
      latitude:"",
      longtude:"",
  },


  phone_number: "",
  email: "",
  website: ""

}


function AboutModala() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields) {
    setData(prev => {
     return {...prev, ...fields} 
    })
  }

   function onSubmit(e) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Successful Account Creation")
   }

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
      <button onClick="submit" className="absolute left-[65%] text-white p-1 px-4 hover:bg-blue-800 top-[80vh] bg-blue-600 border-[2px] rounded-md">{isLastStep ? "Finish" : "Next"}</button>
      </form>
      </div>
  )
}

export default AboutModala