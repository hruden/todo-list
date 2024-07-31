import React from "react";
import "./todo.css";
import { SlCheck } from "react-icons/sl";
import { SlClose } from "react-icons/sl";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      <p className="todoText">{todo.text}</p>
      <div>
        <button onClick={() => completeTodo(index)}>
          <SlCheck />
        </button>
        <button onClick={() => removeTodo(index)}>
          <SlClose />
        </button>
      </div>
    </div>
  );
}

export default Todo;
