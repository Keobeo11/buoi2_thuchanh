import React, { useState } from 'react';

function AddTask({ onAdd }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Thêm công việc mới" 
      />
      <button type="submit">Thêm</button>
    </form>
  );
}

export default AddTask;
