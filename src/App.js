import React from 'react';
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
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedtodos = prevState.todos.map(todoo => {
        if(todoo.id === id){
          return{
            ...todoo,
            completed: !todoo.completed
          }
        }
        return todoo
      })
      return {
        todos: updatedtodos
      }
    })
  }

  render(){
    const todo = this.state.todos.map(item => <Todoitem key={item.id} item={item} handleChange={this.handleChange}/>)
    return (
      <div className="todo-list">
        {todo}
      </div>
    )
  }
}

export default App;
