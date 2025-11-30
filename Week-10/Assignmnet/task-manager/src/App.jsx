import { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (!text.trim()) return;
    const newTask = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const total = tasks.length;
  const active = tasks.filter(t => !t.completed).length;
  const completed = total - active;

  return (
    <div className="app">
      <header>
        <h1>Task Manager</h1>
        <p className="stats">{total} total • {active} active • {completed} completed</p>
      </header>

      <TaskInput onAddTask={addTask} />
      <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
      <TaskList tasks={filteredTasks} onToggleComplete={toggleComplete} onDelete={deleteTask} />

      {tasks.length === 0 && <p className="empty">No tasks yet. Add one!</p>}
    </div>
  );
}

export default App;