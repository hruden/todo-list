import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import "./accordion.css";
import Todo from "../todo/todo";

const Accordion = ({ todos, completeTodo, removeTodo, theme}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div>
      <div className="accordion" onClick={toggleAccordion}>
        <p>Виконані завдання</p>
        <button className="accordionBtn">
          {isAccordionOpen ? <SlArrowUp /> : <SlArrowDown />}
        </button>
      </div>
      <ul className={`accordionContent ${isAccordionOpen ? "open" : ""}`}>
        {todos
          .filter((todo) => todo.isCompleted)
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              theme={theme}
            />
          ))}
      </ul>
    </div>
  );
};

export default Accordion;
