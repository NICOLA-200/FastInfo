import React from 'react'
import ModalWrapper from './ModalWrapper'
import map from "../../assets/map.png"

function Step1() {
  return (
     <ModalWrapper title="Contact">
    
    <input
            type="number"
            className="  focus:ring-0 focus:outline-none h-[30px] focus:border-blue-900 w-[250px] py-5 border-b-2 border-neutral-400"
            placeholder="250 0000 345"
            value=""
            onChange={() => {}}
          />

<input
            type="text"
            className="  focus:ring-0 focus:outline-none h-[30px] focus:border-blue-900 w-[250px] py-5 border-b-2 border-neutral-400"
            placeholder="Email"
            value=""
            onChange={() => {}}
          />

<input
            type="text"
            className="  focus:ring-0 focus:outline-none h-[30px] focus:border-blue-900 w-[250px] py-5 border-b-2 border-neutral-400"
            placeholder="website"
            value=""
            onChange={() => {}}
          />


       
       
    </ModalWrapper>
  )
}

export default Step1