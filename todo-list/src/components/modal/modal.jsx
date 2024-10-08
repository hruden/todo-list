import React, { useEffect } from "react";
import "./modal.css";

function Modal({ isOpen, closeModal, children }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, isOpen]);

  return (
    <div
      className={`modalOverlay ${isOpen ? "open" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modalContent">
        <button className="modalClose" onClick={closeModal}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
