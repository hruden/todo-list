import React, { useState } from "react";
import "./todo.css";
import { SlCheck } from "react-icons/sl";
import { SlClose } from "react-icons/sl";
import { SlPencil } from "react-icons/sl";

function Todo({ todo, completeTodo, removeTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewText(todo.text);
  };

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button className="btnCheck" onClick={handleSave}><SlCheck /></button>
          <button className="btnClose" onClick={handleCancel}><SlClose /></button>
        </>
      ) : (
        <>
          <p className="todoText">{todo.text}</p>
          <div>
            <button className="btnCheck" onClick={() => completeTodo(todo.id)}>
              <SlCheck />
            </button>
            <button className="btnPencil" onClick={handleEdit} disabled={todo.isCompleted}>
              <SlPencil />
            </button>
            <button className="btnClose" onClick={() => removeTodo(todo.id)}>
              <SlClose />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Todo;
