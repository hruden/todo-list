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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <li
      className={`todo ${theme ? "light" : "dark"}`}
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {isEditing ? (
        <>
          <input
            className="editText"
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
            <button className="btnClose" onClick={openModal}>
              <SlClose />
            </button>
          </div>
          <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <h2>{todo.text} ?</h2>
          <button className="btnDelete" onClick={() => removeTodo(todo.id)}>Видалити</button>
          <button className="btnCancel" onClick={closeModal}>Скасувати</button>
          </Modal>
        </>
      )}
    </li>
  );
}

export default Todo;
