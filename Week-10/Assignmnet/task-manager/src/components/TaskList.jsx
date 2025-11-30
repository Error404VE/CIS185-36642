import TaskItem from './TaskItem';

export default function TaskList({ tasks, onToggleComplete, onDelete }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => onToggleComplete(task.id)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </ul>
  );
}