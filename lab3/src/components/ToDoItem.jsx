import React from 'react';
function ToDoItem({ task, deleteTask }) {
 
 return (
 <div className="todo-item">
<p>{task.text}</p>  
<button onClick={() => deleteTask(task.id)}>
 X
 </button>
 </div>
 );
}
export default ToDoItem;