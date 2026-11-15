import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
function Todos() {
    const todos = useSelector(state=>state.todos);
    console.log(todos);
    const dispatch = useDispatch();
  return (
    <div className=' bg-slate-500 w-1/2  my-2 rounded mb-2'>
      {
        todos.map((todo)=>(
            <div 
            className='flex justify-between rounded-lg'
            key={todo.id}
                
            >
                <div
                className='text-center p-1'
                >{todo.text}</div>
                <div>
                    <button 
                    className='p-1 hover:bg-slate-600'
                onClick={()=>dispatch(removeTodo(todo.id))}
                >❌</button>
                </div>
                
            </div>
        ))
      }
    </div>
  );
}

export default Todos;
