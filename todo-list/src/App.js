import React from 'react';
import './App.css';
import TodoList from './components/todoList/todoList';

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>My To-Do List</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
