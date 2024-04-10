import React from 'react'
import ModalWrapper from './ModalWrapper'
import { FaUpload } from "react-icons/fa";

function Step2() {
  return (
     <ModalWrapper title="About">
<div className='flex flex-col'>
     <span>Upload Profile picture</span>
     <button className='border-neutral-600 border-[2px] mt-2 flex gap-3 p-3 rounded-md'><FaUpload /><span>Upload File</span></button>
</div>

<div className='flex flex-col'>
     <span>Upload other  picture</span>
     <button className='border-neutral-600 border-[2px] mt-2 flex gap-3 p-3 rounded-md'><FaUpload />Upload File</button>
</div>
    </ModalWrapper>
  )
}

export default Step2