import React from 'react'
import ModalWrapper from './ModalWrapper'

function Step1() {
  return (
     <ModalWrapper title="About">
    
    <input
            type="text"
            className="  focus:ring-0 focus:outline-none h-[30px] focus:border-blue-900 w-[170px] py-5 border-b-2 border-neutral-400"
            placeholder="service provider name"
            value=""
            onChange={() => {}}
          />

          <select name="" id="" value="Type of service" className="appearance-none bg-gray-100 w-[200px] border border-gray-300 text-gray-700 py-2 px-5 h-[40px] pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
               <option value="Type of service" className=''>Type of service</option>
               <option value="Education">Education</option>
               <option value="market">market</option>
               <option value="transport">transport</option>
          </select>

          <textarea name="" id="" cols="30" rows="10" className='w-[80%] focus:border-blue-900 h-[100px] border-[1px] border-neutral-400 rounded-md'></textarea>
    </ModalWrapper>
  )
}

export default Step1