import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todoitem from './ToDoItems';
import './style.css'
import todoData from "./todoData"

function App() {
  const todo = todoData.map(item => <Todoitem key={item.id} item={item}/>)
  return (
    <div className="todo-list">
      {todo}
    </div>
  )
}

export default App;
