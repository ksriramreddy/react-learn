import React from 'react';
import { useState } from 'react';
function Colorselector() {
    var [color,setColor] = useState('black');
  return (
    <div className=' w-full h-screen duration-300 bg-black flex justify-center items-center flex-col gap-y-4 ' style={{backgroundColor:color}}>
        <div className='flex flex-wrap  justify-center gap-2 bg-white top-1/2 p-3 rounded-xl max-w-max gap-x-3 shadow-orange-400 opacity-100'>
            <button className=' shadow-lg text-black bg-yellow-400 p-2 rounded-xl shadow-orange-200 ' onClick={()=>setColor("red")}>
              red
            </button>
            <button></button>
            <button className=' shadow-lg rounded-xl text-black bg-yellow-400 p-2 shadow-orange-200 ' onClick={()=>setColor("blue")}>
                blue
            </button>
               <button className=' shadow-lg rounded-xl text-black bg-yellow-400 p-2 shadow-orange-200 ' onClick={()=>setColor("green")}>
                green
            </button>
        </div>
        <h1 className=' text-white'>Select to change background</h1>
        <h1 className=' text-white text-wrap'> color changed to {color}</h1>
    </div>
  );
}
export default Colorselector;