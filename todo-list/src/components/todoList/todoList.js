import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import "./todoList.css";
import Todo from "../todo/todo";
import TodoForm from "../todoForm/todoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const addTodo = text => {
    const newTodo = { id: nanoid(), text, isCompleted: false };
    saveTodos([...todos, newTodo]);
  };

  const completeTodo = id => {
    saveTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  const removeTodo = id => {
    saveTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    saveTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="todo-list">
      {todos
        .filter((todo) => !todo.isCompleted)
        .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
      <div className="accordion" onClick={toggleAccordion}>
        <p>Виконнані завдання</p>
        <button className="accordion-btn" >
          {isAccordionOpen ? <SlArrowUp /> : <SlArrowDown />}
        </button>
      </div>
      {isAccordionOpen && (
          <div className="accordion-content">
            {todos
              .filter((todo) => todo.isCompleted)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                  editTodo={editTodo}
                />
              ))}
          </div>
        )}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default TodoList;
