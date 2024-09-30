import React from 'react';

function TableToDo({ tasks, deleteTask }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.length > 0 ? (
                    tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>
                                <button onClick={() => deleteTask(task.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="2">No tasks available</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default TableToDo;
