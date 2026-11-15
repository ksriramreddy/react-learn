// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
// var num = 1;
// var increment = ()=>{
//   num+=1;
//   console.log(num);
// }

function App() {
  var [counter,setCounter] = useState(0);
  var [num,setNum] = useState(0);
function increment(){
  setCounter(counter+1);
  setNum((p)=>p+1)
  // console.log(counter);
}
  return (
    <>
      {/* <h1> value is : {num}</h1>
      <button onClick = {increment}> inc++</button>
      <h2>Updated value: {num}</h2> */}
      <h1> value is : {counter}</h1>
      <button onClick = {increment}> inc++</button>
      <h2>Updated value: {counter}</h2>
      <h1>prev num is : {num}</h1>
    </>
  );
}

export default App;
