import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');
    
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        
    }
  return (
    <div>
      <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Add a todo' value={input} name='text' className='todo-input' onChange={handleChange}/>
        <button type='submit' className='todo-submit'>Add To Do</button>
      </form>
    </div>
  )
}

export default TodoForm

