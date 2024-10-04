import React, { useState } from 'react';
import './ToDoContainer.css';

function EditToDoItem({ task, setEditingTaskId, updateTask, setEditingText, editingText }) {
  const [errorMessage, setErrorMessage] = useState('');

  function handleSave() {
    if (!editingText.trim()) {
      setErrorMessage('This field is required');
      return;
    }

    updateTask(task.id, editingText.trim());
    setEditingTaskId(null);
    setErrorMessage(''); 
  }

  return (
    <div className="edit-todo-item">
      <input
        className="actionInput"
        type="text"
        value={editingText}
        onChange={(e) => setEditingText(e.target.value)}
      />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <br />
      <button className="saveEditBtn" onClick={handleSave}>Save</button>
      <button className="cancelEditBtn" onClick={() => setEditingTaskId(null)}>Cancel</button>
    </div>
  );
}

export default EditToDoItem;
