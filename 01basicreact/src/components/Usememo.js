import React from 'react';
import { useState, useEffect, useMemo } from 'react';
function Usememo() {
    const [num,setNum] = useState(0);
    const [dark,setDark] = useState(false);
    const themeStyle = {
      backgroundColor: dark? 'black' : 'white',
      color: dark? 'white' : 'black'
    }
    let double = useMemo(()=>{
       return slowfun(num);
    },[num])
  return (
    <>
    <div className=' w-full h-full  flex items-center justify-center'>
      <input type='number' className=' border-4 border-black' onChange={(e)=>setNum(e.target.value)}></input>
      <button onClick={()=>setDark((p)=>!p)}>Toggle</button> <br />
      <div className=' ml-12 w-36   ' style={themeStyle}>{" "+double}</div>
    
    </div>
    </>
  );
}
function slowfun(num){
  for(var i=0;i<1000000000;i++) {

  }
  return num*2;
}
export default Usememo;
