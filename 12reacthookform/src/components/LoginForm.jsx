import React, { useEffect } from 'react';
import {useForm , useFieldArray } from 'react-hook-form';
import {DevTool} from '@hookform/devtools'

function LoginForm() {
    const formValues = {
        username : String,
        email : String,
        password : String
    }

    

    const form = useForm({
        defaultValues : async ()=>{
           let resp =  (await fetch('https://jsonplaceholder.typicode.com/users/2'))
           let data = await resp.json();
           return {
             username : data.name,
             email : data.email,
             password : '',
             company : {
                company : data.company.name,
                catchPhrase : data.company.catchPhrase
             },
             address : [{
               street : '',
               suite : '',
               city : '',
               zipcode : '',
             }]
           }
            
        }
    });
    const {register , control, handleSubmit , formState,  watch , getValues , setValue} =  form;

    const {fields , append , remove} = useFieldArray({
      name : 'address',
      control
    })
    const onSubmit = (data)=>{
        // console.log("submited data: " ,data);
    }
    const {errors} = formState;

    useEffect(()=>{
      const subscribe = watch((value ,{name})=>{
        if(name==='username')
        console.log(name);
      })
      // return ()=> subscribe.unsubscribe()
    },[watch])

    // const watchUserName = watch('username')
    // console.log(watchUserName);

    // console.log();
    const handleGetValues = ()=>{
      console.log('get Values : ' ,getValues('username') );
    }
    const handleSetValues = ()=>{
      setValue('username',getValues('username').toUpperCase());
    }

  return (
    <div className=' w-full h-svh bg-black flex text-white  text-xl justify-center items-center'>
      <form 
      className=' w-1/3 flex flex-col mx-auto  h-fit p-4 gap-y-3 '
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      >

        <label htmlFor="username">UserName</label>
        <input type="text"
        id="username" 
        className=' border rounded-md bg-slate-900'
        {...register('username' , {
            required : {
                value : true,
                message : 'username is required'
            }
        })} 
        />
        <p className=' text-xs text-red-600'>{errors.username?.message}</p>


        <label htmlFor="email">Email</label>
        <input type="email" 
        id="email" 
        className=' border rounded-md bg-slate-900'
        {...register('email',{pattern : {
            value:  /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
            message: 'Please enter a valid email'
        } , validate: {
            notAdmin : (fieldVal)=> (fieldVal!=='123@gmail.com' || 'enter different email Id')
        }})}
         />
         <p className=' text-xs text-red-600'>{errors.email?.message}</p>


        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password "  className=' border rounded-md bg-slate-900'/>

        <label htmlFor="age">Age</label>
        <input type="text"
        className='text-black'
        {...register('age',{
          required: true,
          // valueAsNumber : true
        })}
        />

        <div className='flex flex-col gap-y-2'>
            <label htmlFor="company"> Company Name </label>
            <input type="text" 
            className=' border rounded-md bg-slate-900'
            {...register('company.company')}/>
            <label htmlFor="catchPhrase"> catch Phrase  </label>
            <input type="text" 
            className=' border rounded-md bg-slate-900'
            {...register('company.catchPhrase')}/>

        </div>

        <label htmlFor="phonenumbr">phonenumbr</label>
        {
          fields.map((field,index)=>{
            return(
              <div
              key={index}
              className='flex flex-col gap-y-3'
              >
                <div className='flex flex-row'>
                  <label htmlFor="street" className=' w-1/2'>Streer</label>
                  <input type="text" className=' w-1/2 rounded' {...register(`address.${index}.street`)}/>
                </div>
                <div className='flex flex-row'>
                  <label htmlFor="suite" className=' w-1/2'>Suite</label>
                  <input type="text" className='w-1/2 rounded'{...register(`address.${index}.suite`)}/>
                </div>
                <div className='flex flex-row'>
                  <label htmlFor="city" className=' w-1/2'>City</label>
                  <input type="text" className='w-1/2 rounded'{...register(`address.${index}.city`)}/>
                </div>
                <div className='flex flex-row'>
                  <label htmlFor="street" className=' w-1/2'>ZipCode</label>
                  <input type="text" className='w-1/2 rounded'{...register(`address.${index}.zipcode`)}/>
                </div>
                
                
                
                
                { index>0 && (<button onClick={()=>remove(index)}>Remove</button>)}
              </div>
            )
          })
        }
        <button onClick={()=>append({
          street : '',
          suite : '', 
          city : '',
          zipcode : '',
        })}>Add New Address</button>

        
        <div className=' flex justify-center'>
            <button type="button" 
            className=' bg-slate-900 text-white rounded-md px-4 py-2 w-fit mt-3'
            onClick={handleGetValues}
            >get values</button>
        </div>
        <div className=' flex justify-center'>
            <button type="button" 
            className=' bg-slate-900 text-white rounded-md px-4 py-2 w-fit mt-3'
            onClick={handleSetValues}
            >set values</button>
        </div>
        <div className=' flex justify-center'>
            <button type="submit" 
            className=' bg-slate-900 text-white rounded-md px-4 py-2 w-fit mt-3'
            {...register('password')}
            >Submit</button>
        </div>


        
      </form>
      <DevTool control={control}/>
    </div>
  );
}

export default LoginForm;
