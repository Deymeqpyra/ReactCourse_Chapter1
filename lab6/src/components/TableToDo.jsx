import React from 'react'
import './TableToDo.css'

function TableToDo({ tasks, deleteTask, setEditingTaskId, setEditingText }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>
                <button
                  onClick={() => {
                    setEditingTaskId(task.id);
                    setEditingText(task.title); 
                  }}
                >
                  Edit
                </button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

export default TableToDo
