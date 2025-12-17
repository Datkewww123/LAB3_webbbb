import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '15px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
        style={{ padding: '6px', width: '70%' }}
      />
      <button type="submit" style={{ marginLeft: '5px' }}>
        Add
      </button>
    </form>
  );
}

export default TodoForm;
