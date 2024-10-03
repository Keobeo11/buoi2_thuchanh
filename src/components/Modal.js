

import React, { useState } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, onAdd }) {
  const [task, setTask] = useState('');
  const [dateTime, setDateTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && dateTime.trim()) {
      onAdd(task, dateTime);
      setTask('');
      setDateTime('');
      onClose(); // Đóng modal sau khi thêm công việc
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Thêm Công Việc Mới</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
            placeholder="Nhập nội dung công việc" 
          />
          <input 
            type="datetime-local" 
            value={dateTime} 
            onChange={(e) => setDateTime(e.target.value)} 
          />
          <button type="submit">Thêm</button>
          <button type="button" onClick={onClose}>Đóng</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
