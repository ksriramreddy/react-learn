import { useState,useEffect } from "react";

import React from 'react';

function Usecurrency(currency) {
  const [data, setdata] = useState({})
  useEffect(()=>{
    console.log(currency);
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
    .then((response)=>response.json())
    .then((response)=>setdata(response[currency]))
  },[currency])
  console.log(data);
  return(data)
}

export default Usecurrency;
