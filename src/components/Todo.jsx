import React from 'react'
import TaskList from './TaskList'
import "./../App.css"

const Todo = ({handleFilter,handleComplete,handleDelete,filter}) => {
  return (
    <div className=" task-list-container">
    {handleFilter().length > 0 ? (
      handleFilter().map((todo) => <TaskList key={todo.id} todo={todo} handleComplete={handleComplete} handleDelete={handleDelete} />)
    ) : (
      <p className="task-card not-found">{filter} task's Not Found</p>
    )}
  </div>
  )
}

export default Todo
