import React, { useState } from "react";
import "./todo.css";
import { SlCheck, SlClose, SlPencil} from "react-icons/sl";
import Modal from "../modal/modal";

function Todo({ todo, completeTodo, removeTodo, editTodo, theme }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [isModalOpen, setIsModalOpen] = useState(false);


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

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <li
      className={`todo ${theme ? "light" : "dark"}`}
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {isEditing ? (
        <>
          <input
            className="edit-text"
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button className="btn-check" onClick={handleSave}><SlCheck /></button>
          <button className="btn-close" onClick={handleCancel}><SlClose /></button>
        </>
      ) : (
        <>
          <p className="todo-text">{todo.text}</p>
          <div>
            <button className="btn-check" onClick={() => completeTodo(todo.id)}>
              <SlCheck />
            </button>
            <button className="btn-pencil" onClick={handleEdit} disabled={todo.isCompleted}>
              <SlPencil />
            </button>
            <button className="btn-close" onClick={toggleModal}>
              <SlClose />
            </button>
          </div>
          <Modal isOpen={isModalOpen} closeModal={toggleModal}>
          <h2>{todo.text} ?</h2>
          <button className="btn-delete" onClick={() => removeTodo(todo.id)}>Видалити</button>
          <button className="btn-cancel" onClick={toggleModal}>Скасувати</button>
          </Modal>
        </>
      )}
    </li>
  );
}

export default Todo;
