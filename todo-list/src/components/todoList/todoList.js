import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import "./todoList.css";
import Todo from "../todo/todo";
import TodoForm from "../todoForm/todoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "light");
    }
    
  }, []);

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const addTodo = (text) => {
    const newTodo = { id: nanoid(), text, isCompleted: false };
    saveTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    saveTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const removeTodo = (id) => {
    saveTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    saveTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "light" : "dark");
  };

  return (
    <div className={`app ${isDarkMode ? "light" : "dark"}`}>
      <div className="container">
        <label id="switch" className="switch">
            <input type="checkbox" onChange={toggleTheme} id="slider" checked={isDarkMode}/>
            <span className="slider round"></span>
        </label>
        <h1>My To-Do List</h1>
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
                theme={isDarkMode}
              />
            ))}
          <div className="accordion" onClick={toggleAccordion}>
            <p>Виконані завдання</p>
            <button className="accordion-btn">
              {isAccordionOpen ? <SlArrowUp /> : <SlArrowDown />}
            </button>
          </div>
          <div className={`accordion-content ${isAccordionOpen ? "open" : ""}`}>
            {todos
              .filter((todo) => todo.isCompleted)
              .map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                  editTodo={editTodo}
                  theme={isDarkMode}
                />
              ))}
          </div>
          <TodoForm addTodo={addTodo} theme={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default TodoList;
