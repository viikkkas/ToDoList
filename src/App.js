import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDOItem from './components/todoitems';
import './style.css'

function App() {
  return (
    <div className="todo-list">
      <ToDOItem/>
      <ToDOItem/>
      <ToDOItem/>
      <ToDOItem/>
    </div>
  );
}

export default App;
