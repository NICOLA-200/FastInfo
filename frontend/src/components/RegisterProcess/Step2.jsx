import React from 'react'
import ModalWrapper from './ModalWrapper'
import { FaUpload } from "react-icons/fa";
import { useState } from 'react';
function Step2({ profile_picture ,updateFields }) {


     
          const [selectedImage, setSelectedImage] = useState(null);
        
          const handleImageChange = (event) => {
            const file = event.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                updateFields({profile_picture: reader.result})
                setSelectedImage(reader.result);
              };
              reader.readAsDataURL(file);
            }

         
          };


  return (
     <ModalWrapper title="About">
<div className='flex flex-col'>
     <span>Upload Profile picture</span>
     <label
            htmlFor="file-input"
            className=" z-50    px-2 py-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
           <span> upload Profile </span>
            <input
              type="file"
              name="avatar"
              id="file-input"
              accept=".jpg,.jpeg,.png"
              onChange={handleImageChange}
              className="sr-only"
            />
          </label>
          {profile_picture && (
        <div className='p-1'>

          <img
            src={profile_picture}
            alt="Selected"
           className='h-[30vh] w-[200px] border-[2px] border-neutral-300'
          />
        </div>
      )}
</div>

{/* <div className='flex flex-col'>
     <span>Upload other  picture</span>
     <button className='border-neutral-600 border-[2px] mt-2 flex gap-3 p-3 rounded-md'><FaUpload />Upload File</button>
</div> */}
    </ModalWrapper>
  )
}

export default Step2