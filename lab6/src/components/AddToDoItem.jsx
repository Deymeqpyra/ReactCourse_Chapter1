import React from 'react'
import './ToDoContainer.css'
function AddToDoItem({ text, setText, addTask, errorMessage }) {
  return (
    <div className='add-todo-item'>
      <input
        className='actionInput'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <br />
      <button className='addButton' onClick={() => addTask(text)}>Add</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  )
}

export default AddToDoItem
