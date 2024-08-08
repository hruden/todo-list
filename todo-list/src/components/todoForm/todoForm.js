import React, { useState } from 'react';
import './todoForm.css'

function TodoForm({ addTodo, theme }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={theme ? "dark" : "light"}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
