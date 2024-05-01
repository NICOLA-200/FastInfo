import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function ModalWrapper({title , children}) {
   const navigate = useNavigate()

  return (
    <div className='bg-white relative top-24 mx-auto w-[52%] min-w-[330px] shadow-sm h-[68vh]'>
 
<div className="absolute inset-0  bg-[#E2E2E2] z-20" style={{ clipPath: 'polygon(100% 90%, 100% 0%, 100% 100%, 93% 100%)' }}></div>
<div className="absolute inset-0  bg-[#E2E2E2] z-20" style={{ clipPath: 'polygon(0% 0%, 7% 0%, 0% 10%, 0% 10%)' }}></div>


<div className='w-[87%] h-[3px] relative top-20 mx-auto  bg-black opacity-35'></div>
<button onClick={() => {navigate("/")}} className=' absolute top-7 right-12 z-30 '><IoMdClose className='w-6 h-6' /></button>

<div className=' my-auto mt-20 h-[45vh]  w-[100%] overflow-x-hidden overflow-y-auto'>
<h1 className='text-center font-semibold text-2xl mb-6'>{title}</h1>

<div className='flex justify-around flex-wrap gap-7 px-8 md:px-14'>
   {children}
</div>
</div>


    </div>
  )
}

export default ModalWrapper