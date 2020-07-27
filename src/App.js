import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todoitem from './ToDoItems';
import './style.css'
import todoData from "./todoData"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todoData
    }
  }

  render(){
    const todo = this.state.todos.map(item => <Todoitem key={item.id} item={item}/>)
    return (
      <div className="todo-list">
        {todo}
      </div>
    )
  }
}

export default App;
