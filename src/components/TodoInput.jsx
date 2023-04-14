import React from 'react'
import "./../App.css"

const TodoInput = ({setInputTodo,keyFunction,inputTodo,handleAddTask}) => {
  return (
    <div className='task-inp'>
      <input
        type="text"
        onChange={(e) => setInputTodo(e.target.value)}
        onKeyDown={keyFunction}
        value={inputTodo}
        placeholder="Create a new Todo..."
      />

      
    </div>
  )
}

export default TodoInput
