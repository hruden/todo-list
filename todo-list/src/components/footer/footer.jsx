import React, { useState } from "react";
import "./footer.css";
import Modal from "../modal/modal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <footer className="footer">
      <p>© 2024 My Todo List App. All rights reserved.</p>
      <p onClick={toggleModal}>My contacts</p>
      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <ul>
          <li><a href="tel:+38(095)496-72-44" target="_blank" rel="noreferrer">+38 (095) 496-72-44</a></li>
          <li><a href="mailto:hrigoriev.ihor@gmail.com" target="_blank" rel="noreferrer">Hrigoriev.ihor@gmail.com</a></li>
          <li><a href="https://t.me/igor_ban" target="_blank" rel="noreferrer">Telegram</a></li>
          <li><a href="https://www.linkedin.com/in/ihor-hryhoriev-830062278/" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/hruden" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://goo.gl/maps/BDQaWE5JD5HgARF57" target="_blank" rel="noreferrer">Kharkiv, Ukraine</a></li>
        </ul>
      </Modal>
    </footer>
  );
};

export default Footer;
