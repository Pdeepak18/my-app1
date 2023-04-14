import './App.css';
import { useState, useEffect } from "react";
import Footer from './components/Footer';
import TodoInput from './components/TodoInput';
import Todo from './components/Todo';
import DarkMode from './components/DarkMode';
import LightMode from './components/LightMode';



function App() {
  const [inputTodo, setInputTodo] = useState("");
  const [theme, setTheme] = useState("dark");

  const [todos, setTodos] = useState(() => {
    // get the todos from localstorage
    const savedTodos = localStorage.getItem("todos");
    // if there are todos stored
    if (savedTodos) {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedTodos);
      // otherwise
    } else {
      // return an empty array
      return [];
    }
  });

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // localstorage only support storing strings as keys and values
    // - therefore we cannot store arrays and objects without converting the object
    // into a string first. JSON.stringify will convert the object into a JSON string
    localStorage.setItem("todos", JSON.stringify(todos));
    // add the todos as a dependancy because we want to update
    // localstorage anytime the todos state changes
  }, [todos]);

  // Add Task
  const keyFunction = (e) => {
    if (e.key === "Enter") {
      if (e.target.value) {
        handleAddTask(e.target.value);
      }
    }
  };

  const handleAddTask = () => {
    setTodos([
     
      {
        task: inputTodo,
        id: Date.now().toString(),
        isCompleted: false
      }, ...todos
    ]);

    setInputTodo("");
  };

  // Delete feature
  const handleDelete = (ind) => {
    const newTodo = todos.filter((todo) => todo.id !== ind);
    console.log(newTodo);
    setTodos(newTodo);
  };

  // Filter completed and not completed Task
  const handleComplete = (id) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        };
      }
      return todo;
    });
    console.log(JSON.stringify(newTodo));

    setTodos(newTodo);
  };


  // Filter rendering on UI
  const handleFilter = () => {
    const temp1 = todos.filter((todo) => todo.isCompleted === false);
    console.log(temp1.length);

    if (filter === "Active") {
      return temp1;
    } else if (filter === "Completed") {
      return todos.filter((todo) => todo.isCompleted === true);
    } else {
      return todos;
    }
  };

  // clear all completed task
  const handleDeleteCompleted = () => {
    const newTodo = todos.filter((todo) => todo.isCompleted !== true);
    setTodos(newTodo);
  };

  // count active task
  const countActiveTask = () => {
    const newTodo = todos.filter((todo) => todo.isCompleted !== true);
    return newTodo.length;
  };



  return (
    <div className= {`main-container ${theme}`} >

    <div className=" container">

    <div className="header">
          <h1 className=" text-white	text-3xl	">Todo App</h1>
          {theme === "light" ? (
            <button onClick={() => setTheme("dark")}>
              <DarkMode setTheme={setTheme} />
            </button>
          ) : (
            <button onClick={() => setTheme("light")}>
              <LightMode setTheme={setTheme} />
            </button>
          )} 
      </div>

    <TodoInput 
    setInputTodo = {setInputTodo}
    keyFunction = {keyFunction}
    inputTodo = {inputTodo} 
    handleAddTask={handleAddTask}
    />
   
   {
    todos.length > 0 && (
    <div>
    <Todo 
    handleFilter={handleFilter} 
    handleComplete={handleComplete} 
    handleDelete={handleDelete}
    filter={filter}
    />

    <Footer 
    handleDeleteCompleted={handleDeleteCompleted}
    countActiveTask={countActiveTask}
    setFilter={setFilter}
    filter={filter}
    />   

    </div>
    )}


    </div>
    </div>
  );
}

export default App;
