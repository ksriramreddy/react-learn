import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const user = useLoaderData()
  console.log(user);
    // const [user,setUser] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ksriramreddy')
    //    .then(res=>res.json())
    //    .then((res)=>{setUser(res)
    //     console.log(res);
    // })
       
    // },[])
  return (
    <div className='container px-4 flex justify-center items-center flex-row gap-x-6 py-4'>
      <div className=''>
        <img src={`${user.avatar_url}`} alt="Logo" width={300} />
      </div>
      <div className='flex flex-col gap-y-2'>
        <div>
          <h1 className='text-3xl font-bold'> User Name : {user.login}</h1>
        </div>
        <div>
          <h1 className='text-3xl font-bold'> User id : {user.id}</h1>
        </div>
        <div>
          <h1 className='text-3xl font-bold'> Followers : {user.followers}</h1>
        </div>
        <div>
          <h1 className='text-3xl font-bold'> Public Repos : {user.public_repos}</h1>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubLoder = async ()=>{
  const response  = await fetch('https://api.github.com/users/ksriramreddy')
  return response.json();
}
