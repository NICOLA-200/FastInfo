import React from 'react'
import ModalWrapper from './ModalWrapper'
import { useState } from 'react';

function Step1({service_name, service_requirement, service_description,product_name, product_requirement,product_description, role_name,role_requirement,role_description ,updateFields}) {

     const [type , setType] = useState(2);
  return (
     <ModalWrapper >
          <h1 className='font-bold text-2xl'><button className={`${type == 0 && "underline text-blue-900" }  hover:text-neutral-700 p-2`} type='button' onClick={() => {setType(0)}}>Services </button>  &   <button  type='button' className={`${type == 1 && "underline text-blue-900" }  hover:text-neutral-700 p-2`} onClick={() => {setType(1)}}>Products </button>   & <button type='button' className={`${type == 2 && "underline text-blue-900" }  hover:text-neutral-700 p-2`} onClick={() => {setType(2)}}>Role </button> </h1>

          <p>Do you offer services to clients? If so, choose "Services."  
               Sell tangible goods? Pick "Products."  Perhaps you have open
                positions? Select "Roles" to find the perfect fit for your team</p>

    


          {/* <select name="" id="" value="Type of service" className="appearance-none bg-gray-100 w-[230px] border border-gray-300 text-gray-700 py-2 px-5 h-[40px] pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
               <option value="Type of service" className=''>Type of service</option>
               <option value="Education">Education</option>
               <option value="market">market</option>
               <option value="transport">transport</option>
          </select> */}

      {type == 0 && 
                     <>
                     <input
                     type="text"
                     className="  focus:ring-0 focus:outline-none h-[30px] focus:border-blue-900 w-[200px] py-5 border-b-2 border-neutral-400"
                     placeholder="service name"
                 
                     value={service_name}
                     onChange={e => updateFields({ service_name: e.target.value })}
                   />
         
         <input
                     type="text"
                     className="  focus:ring-0 focus:outline-none h-[30px] focus:border-blue-900 w-[200px] py-5 border-b-2 border-neutral-400"
                     placeholder="requirement"
                
                     value={service_requirement}
                     onChange={e => updateFields({ product_requirement: e.target.value })}
                   />
         
                   <textarea name=""
                    id=""
                    value={service_description}
                    onChange={e => updateFields({ product_name: e.target.value })}
                     placeholder='Description' cols="30" rows="10" className='w-[80%] p-2 focus:outline-none focus:ring-0 focus:border-blue-900 h-[100px] border-[2px] border-neutral-400 rounded-md'></textarea>
                   </>
      }    

{type == 1 && 
                     <>
                     <input
                     type="text"
                     className="  focus:ring-0 focus:outline-none h-[30px] focus:border-blue-900 w-[200px] py-5 border-b-2 border-neutral-400"
                     placeholder="product name"
                      
                     value={product_name}
                     onChange={e => updateFields({ product_name: e.target.value })}
                   />
         
         <input
                     type="text"
                     className="  focus:ring-0 focus:outline-none h-[30px] focus:border-blue-900 w-[200px] py-5 border-b-2 border-neutral-400"
                     placeholder="requirement"
                  
                     value={product_requirement}
                     onChange={e => updateFields({ product_requirement: e.target.value })}
                   />
         
                   <textarea name="product_description"
                    id="product_description"
                     placeholder='Description' 
                    value={product_description}
                    onChange={e => updateFields({ product_description: e.target.value })}
                     cols="30" rows="10" className='w-[80%] p-2 focus:outline-none focus:ring-0 focus:border-blue-900 h-[100px] border-[2px] border-neutral-400 rounded-md'></textarea>
                   </>
      }   

      {type == 2 && 
                     <>
                     <input
                     type="text"
                     className="  focus:ring-0 focus:outline-none h-[30px] focus:border-blue-900 w-[200px] py-5 border-b-2 border-neutral-400"
                     placeholder="Role name"
                     value={role_name}
                     onChange={e => updateFields({ role_name: e.target.value })}
                   />
         
         <input
                     type="text"
                     className="  focus:ring-0 focus:outline-none h-[30px] focus:border-blue-900 w-[200px] py-5 border-b-2 border-neutral-400"
                     placeholder="requirement"
                     value={role_requirement}
                     onChange={e => updateFields({ role_requirement: e.target.value })}
                   />
         
                   <textarea name="role_description"
                    id="role_description"
                     placeholder='Description' 
                     value={role_description}
                     onChange={e => updateFields({ role_description: e.target.value })}
                     cols="30" rows="10" className='w-[80%] p-2 focus:outline-none focus:ring-0 focus:border-blue-900 h-[100px] border-[2px] border-neutral-400 rounded-md'></textarea>
                   </>
      }    



    </ModalWrapper>
  )
}

export default Step1