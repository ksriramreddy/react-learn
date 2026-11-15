import React, { useCallback, useEffect, useState } from 'react';

function UseCallback() {
    const [length,setLength] = useState(8);
    const [numberAllowed,setNumberAllowed] = useState(false);
    const [password,setPassword] = useState("")
    const [charAllowed,setCharAllowed] = useState(false);
    var passGenerator = useCallback(()=>{
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabc";
      if(charAllowed) pass +="!@#$%^&*()"
      if(numberAllowed) pass +="1234567890"
      for(let i=1;i<length;i++){
        pass += str[Math.floor(Math.random()*str.length+1)];
      }
      setPassword(pass);
    },[length,numberAllowed,charAllowed])
    useEffect(()=>{
      passGenerator();
    },[length,numberAllowed,charAllowed]) 
    function copyPass(){
      navigator.clipboard.writeText(password);
    }
  return (
    <>
    <div className=' w-2/4 mx-auto shadow-md rounded-lg px-3 my-8 bg-gray-800 text-orange-400 p-6 pt-2'>
        <h1 className='text-white text-center my-3'>
            Password Generator
        </h1>
        <div className='flex shodow rounded-lg overflow-hidden mb-4'>
            <input
            type='text'
            value={password}
            readOnly
            placeholder='Password'
            className='ouline-none w-full py-1 px-3'
            />
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPass}> copy </button>
        </div>
        <div className='flex text-sm gap-x-2'>
            <input className=''
            type='range'
            min={8}
            max={20}
            value={length}
            onChange={(e)=>setLength(e.target.value)}
            >
            </input>
            <label htmlFor='length'> length : {length}</label>

        </div>
        <div className='flex text-sm gap-x-2'>
            <input
            type='checkbox'
            defaultChecked={numberAllowed}
            onChange={() =>setNumberAllowed((val)=>!val)}
            >
            </input>
            <label htmlFor='number'> number :{numberAllowed?"YES":"NO"} {numberAllowed}</label>
        </div>
        <div className='flex text-sm gap-x-2'>
            <input
            type='checkbox'
            defaultChecked={charAllowed}
            onChange={() =>setCharAllowed((val)=>!val)}
            >
            </input>
            <label htmlFor='character'> character :{charAllowed?"YES":"NO"} {numberAllowed}</label>
        </div>
    </div>

    </>
  );
}

export default UseCallback;
