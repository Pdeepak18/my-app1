import React from 'react'
import "./../App.css"
const TaskList = ({todo , handleComplete,handleDelete}) => {
  return (
    <div  className="task-card">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => handleComplete(todo.id)}
              />
              {/* <span>
                {todo.task}
                <button onClick={() => handleDelete(todo.id)}>X</button>
              </span> */}
              {todo.isCompleted === true ? (
            <del>{todo.task}</del>
          ) : (
            <p> {todo.task}</p>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="delete-btn"
            onClick={() => handleDelete(todo.id)}
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
              clipRule="evenodd"
            />
          </svg>
            </div>
  )
}

export default TaskList
