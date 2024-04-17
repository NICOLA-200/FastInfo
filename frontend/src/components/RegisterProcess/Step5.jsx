import React from 'react'
import ModalWrapper from './ModalWrapper'
import map from "../../assets/map.png"

function Step1({phone_number, email, website , updateFields}) {
  return (
     <ModalWrapper title="Contact">
    
    <input
            type="number"
            className="  focus:ring-0 focus:outline-none h-[30px] focus:border-blue-900 w-[250px] py-5 border-b-2 border-neutral-400"
            placeholder="250 0000 345"
            value={phone_number}
            onChange={e => updateFields({ phone_number: e.target.value })}
          />

<input
            type="text"
            className="  focus:ring-0 focus:outline-none h-[30px] focus:border-blue-900 w-[250px] py-5 border-b-2 border-neutral-400"
            placeholder="Email" 
            value={email}
            onChange={e => updateFields({ email: e.target.value })}
          />

<input
            type="text"
            className="  focus:ring-0 focus:outline-none h-[30px] focus:border-blue-900 w-[250px] py-5 border-b-2 border-neutral-400"
            placeholder="website"
            value={website}
            onChange={e => updateFields({ website: e.target.value })}
          />


       
       
    </ModalWrapper>
  )
}

export default Step1