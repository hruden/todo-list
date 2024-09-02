import React, { useState } from "react";
import "./footer.css";
import Modal from "../modal/modal";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { LiaTelegram } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <footer className="footer">
      <p>© 2024 My Todo List App. All rights reserved.</p>
      <p className="contacts" onClick={toggleModal}>
        My contacts
      </p>
      <Modal isOpen={isModalOpen} closeModal={toggleModal}>
        <ul className="contactList">
          <li className="contactItem">
            <a href="tel:+38(095)496-72-44" target="_blank" rel="noreferrer">
              <LuPhone /> +38 (095) 496-72-44
            </a>
          </li>
          <li className="contactItem">
            <a
              href="mailto:hrigoriev.ihor@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <MdOutlineEmail /> Hrigoriev.ihor@gmail.com
            </a>
          </li>
          <li className="contactItem">
            <a href="https://t.me/igor_ban" target="_blank" rel="noreferrer">
              <LiaTelegram /> Telegram
            </a>
          </li>
          <li className="contactItem">
            <a
              href="https://www.linkedin.com/in/ihor-hryhoriev-830062278/"
              target="_blank"
              rel="noreferrer"
            >
              <CiLinkedin /> LinkedIn
            </a>
          </li>
          <li className="contactItem">
            <a
              href="https://github.com/hruden"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub /> GitHub
            </a>
          </li>
          <li className="contactItem">
            <a
              href="https://goo.gl/maps/BDQaWE5JD5HgARF57"
              target="_blank"
              rel="noreferrer"
            >
              <IoLocationOutline /> Kharkiv, Ukraine
            </a>
          </li>
        </ul>
      </Modal>
    </footer>
  );
};

export default Footer;
