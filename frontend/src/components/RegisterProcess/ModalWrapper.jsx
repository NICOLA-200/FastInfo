import React from 'react'
import { IoMdClose } from "react-icons/io";

// eslint-disable-next-line react/prop-types
function ModalWrapper({title , children}) {
  return (
    <div className='bg-white relative top-24 mx-auto w-[52%] min-w-[330px] shadow-sm h-[68vh]'>
 
<div className="absolute inset-0  bg-[#E2E2E2] z-20" style={{ clipPath: 'polygon(100% 90%, 100% 0%, 100% 100%, 93% 100%)' }}></div>
<div className="absolute inset-0  bg-[#E2E2E2] z-20" style={{ clipPath: 'polygon(0% 0%, 7% 0%, 0% 10%, 0% 10%)' }}></div>


<div className='w-[87%] h-[3px] relative top-20 mx-auto  bg-black opacity-35'></div>
<span className=' absolute top-7 right-12 z-30 '><IoMdClose className='w-6 h-6' /></span>

<div className=' my-auto mt-20 h-[60%] w-[100%] overflow-scroll'>
<h1 className='text-center font-semibold text-2xl mb-6'>{title}</h1>

<div className='flex justify-around flex-wrap gap-7 px-8 md:px-14'>
   {children}
</div>
</div>


<div className='bg-[#488CF2] absolute bottom-0 w-full h-[15%] md:h-[25%] '>
<div className="absolute inset-0  bg-white z-20" style={{ clipPath: 'polygon(-1% -1%, 55% -1%, 50% 35%, 0% 35%)' }}></div>
</div>

    </div>
  )
}

export default ModalWrapper