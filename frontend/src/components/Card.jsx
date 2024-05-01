import React from 'react';
import { useNavigate } from 'react-router-dom';
import school from '../assets/school.png';

function Card({ provider }) {
  const navigate = useNavigate();
  console.log(provider?.type_service)

  const handleNavigate = () => {
    navigate('/resultPage', { state: { providerData: provider } });
  };

  return (
    <div className='shadow-md shadow-neutral-700 pb-3 w-[18rem] space-y-1 overflow-hidden rounded-md'>
      <img src={provider?.profile_file || school} className='w-auto object-fill' alt="school" />
      <div className='ml-2'>
        <h1 className='font-bold'>{provider?.service_provider}</h1>
        <h2 className='text-neutral-600'>{provider?.type_service}</h2>
        <p className='text-blue-700'></p>
        <button onClick={handleNavigate} className='hover:text-blue-600 hover:underline'>View Details</button>
      </div>
    </div>
  );
}

export default Card;
