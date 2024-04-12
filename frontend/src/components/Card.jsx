import React from 'react'

import school from '../assets/school.png'

function Card() {
  return (
    <div className='shadow-md shadow-neutral-700 pb-3  w-[18rem] space-y-1 overflow-hidden rounded-md'>
        <img src={school} className='w-auto' alt="school" />
          <div className='ml-2'>
        <h1 className='font-bold'>Kigali parent school</h1>

        <h2 className='text-neutral-600'>Education</h2>

        <p className='text-blue-700'>actively seeking new student</p>
        </div>
    </div>
  )
}

export default Card