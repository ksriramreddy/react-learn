import React from 'react';
import { useState } from 'react';
function Passgenerator() {
    const [length,setLength] = useState(6);
    const [numberAllowed,setNumberAllowed] = useState(1);
    const [password,setPassword] = useState("")
  return (
    <div className=' w-2/4 mx-auto shadow-md rounded-lg px-3 my-8 bg-gray-800 text-orange-400 p-6 pt-2'>
        <h1 className='text-white text-center my-3'>
            Password Generator
        </h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
            type='text'
            value={password}
            readOnly
            placeholder='Password'
            className='ouline-none w-full py-1 px-3'
            />
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'> copy </button>
        </div>
        <div className='flex text-sm gap-x-2 items-center justify-center'>
        <input type='range'
                min={6}
                max={20}
                defaultValue={length}     
                className=' cursor-pointer'
                onChange={(e)=>setLength(e.target.value)}/>
                <label htmlFor='length'> length : {length}</label>
                <input  type='checkbox'
                defaultChecked={numberAllowed}
                onChange={()=>{setNumberAllowed((p)=>!p)}}/>
                <label htmlFor='number'>number</label>  
        </div>
    </div> 
  );
}

export default Passgenerator;
