import { useState } from 'react';

export default function TaskInput({ onAddTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What needs to be done?"
        autoFocus
      />
      <button type="submit">Add Task</button>
    </form>
  );
}