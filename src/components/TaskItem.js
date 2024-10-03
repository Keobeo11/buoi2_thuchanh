
import './TaskItem.css';
import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onToggle(task.id)} 
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.name}
      </span>
      <span style={{ marginLeft: '10px', fontSize: '0.8em', color: '#888' }}>
        {new Date(task.dateTime).toLocaleString()}
      </span>
      <button onClick={() => onDelete(task.id)}>Xóa</button>
    </li>
  );
}

export default TaskItem;
