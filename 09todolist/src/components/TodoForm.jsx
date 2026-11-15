import React, { useState } from 'react';
import { useTodo } from '../contexts';

function TodoForm() {
    const [todo,setTodo] = useState("");
    const {addTodo} = useTodo()
    const add = (e)=>{
        e.preventDefault()
        if(todo.length<=0) return
        addTodo({todo,completed:false})
        setTodo("")
    }
  return (
    <form
        onSubmit={add}
        className='flex '
        
    >
        <input type="text" 
            placeholder='todo...'
            className='flex w-full border-black rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
        />
        <button type='submit'
            className=' rounded-lg px-3 py-1 bg-green-400 text-white shrink-0'
        >
            add
        </button>
    </form>
  );
}

export default TodoForm;
