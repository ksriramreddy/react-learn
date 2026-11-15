import React, { useEffect, useRef, useState } from 'react';

function Useref() {
    const [name,setName] = useState("")
    const ntimes = useRef(0)
    const ele = useRef(0)
    useEffect(()=>{
        ntimes.current+=1
    },[name])
    console.log(ntimes.current)
    function foc(){
        ele.current.focus()

    }
  return (
    <>
    <input type='text' ref={ele} onChange={(e)=>setName(e.target.value)}>

    </input>
    <button onClick={foc} >focus</button>
    <div>
        my name is {name}
    </div>
    <div>
        re-rendered {ntimes.current}
    </div>
    </>
  );
}

export default Useref;
