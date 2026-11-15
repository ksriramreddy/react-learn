import React, { useState , useContext} from 'react';
import UserContext from '../../context/UserContext';

function Login() {
  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const {setUser} = useContext(UserContext)
  const submitForm = (e)=>{
    e.preventDefault()
    setUser({name,password})
  }
  return (
    <div className=' flex flex-col gap-y-4 '>
        <div>
            <h5 className='text-3xl font-bold text-center' placeholder="name">Login</h5>
            <input type="text"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            />
            
        </div>
        <div>
        <h5 className='text-3xl font-bold text-center'>Passward</h5>
            <input type="password" 
            placeholder='passward'
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            />
        </div>
      <button onClick={submitForm}>
        Submit
      </button>
    </div>
  );
}

export default Login;
