import React from 'react';
import { Link, NavLink } from 'react-router-dom';
function Header() {

  return (
    <>
    <header className=' w-full shadow-lg sticky z-50 top-0 bg-white'>
        <div className='flex flex-row justify-around flex-wrap'>
            <div className='p-2 m-3'>
                <Link to='/'>
                    <img src="https://i.pinimg.com/236x/47/08/47/470847d3f5e71c2c8ac897d0522f2fed.jpg" alt="LOGO" width={70} height={70} />
                </Link>
            </div>
            <div className='flex gap-10 items-center pl-3 pr-3 font-semibold text-lg'>
                <NavLink to='/'className={({isActive})=>{
                    return (isActive ? 'text-red-500':'')
                }} >
                    HOME
                </NavLink>
                <NavLink to='about' className={({isActive})=>{
                    return (isActive ? 'text-red-500':'')
                }} >
                    ABOUT
                </NavLink>
                <NavLink to='github' className={({isActive})=>{
                    return (isActive ? 'text-red-500':'')
                }}>
                    GitHub
                </NavLink>
                <NavLink to='contact' className={({isActive})=>{
                    return (isActive ? 'text-red-500':'')
                }}>
                    CONTACT
                </NavLink>
                <NavLink to='/user' className={({isActive})=>{
                    return (isActive ? 'text-red-500':'')
                }}>
                    USER
                </NavLink>
                <NavLink to='account' className={({isActive})=>{
                    return (isActive ? 'text-red-500':'')
                }}>
                    ACCOUNT
                </NavLink>
            </div>
            <div className='flex  gap-3 items-center '>
                <NavLink to='login' >
                    LOGIN
                </NavLink>
                <NavLink to='getstarted' className={()=>{
                    return (`bg-orange-400 p-2 rounded-lg`)
                }}>
                    GET STARTED
                </NavLink>
                
            </div>
        </div>
    </header>
    </>
  );
}

export default Header;
