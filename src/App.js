import './App.css';

import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name, dateTime) => {
    setTasks([...tasks, { id: Date.now(), name, completed: false, dateTime }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const sortTasksByDate = () => {
    const sortedTasks = [...tasks].sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
    setTasks(sortedTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <button onClick={() => setModalOpen(true)}>Thêm Công Việc</button>
      <button onClick={sortTasksByDate}>Sắp Xếp Theo Ngày Giờ</button>
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        onAdd={addTask} 
      />
    </div>
  );
}

export default App;
