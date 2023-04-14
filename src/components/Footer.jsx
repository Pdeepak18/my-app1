import React from 'react'
import "./../App.css"
const Footer = ({handleDeleteCompleted ,countActiveTask,setFilter,filter}) => {


 
  return (
    <div className="todo-footer">
        <span><p >{countActiveTask()} Items Left</p> </span>
        <button  
        onClick={() => setFilter("All") } 
        id='btnn'> <p style={{ color: filter === "All" && "#3b82f6" }}>All</p>  
        </button>
        <button  onClick={() => setFilter("Active")}> <p style={{ color: filter === "Active" && "#3b82f6" }}>Active</p>  </button>
        <button onClick={() => setFilter("Completed")}> <p  style={{ color: filter === "Completed" && "#3b82f6" }}>Completed</p>   </button>
        <button  onClick={handleDeleteCompleted}> <p className="colorr">Clear Completed</p>  </button>
      </div>  
  )
}

export default Footer
