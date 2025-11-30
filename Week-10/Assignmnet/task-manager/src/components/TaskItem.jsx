export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label className="checkbox-label">
        <input type="checkbox" checked={task.completed} onChange={onToggle} />
        <span className="checkmark"></span>
        <span className="task-text">{task.text}</span>
      </label>
      <button onClick={onDelete} className="delete-btn">×</button>
    </li>
  );
}