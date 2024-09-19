import React, { useState } from 'react';
import SearchInput from './SearchInput';
import TableToDo from './TableToDo';
import PageTitle from './PageTitle';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function addTask(text) {
        if (!text.trim()) {
            setErrorMessage("This field is required");
            return;
        }

        setErrorMessage('');

        const newTask = {
            id: Date.now(),
            text,
        };

        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const filteredTasks = tasks.filter(task =>
        task.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="todo-list">
            <PageTitle title="Dovhii To-Do List" />
            <SearchInput
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <TableToDo 
                tasks={filteredTasks} 
                deleteTask={deleteTask} 
            />
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={() => addTask(text)}>Add</button>

            {errorMessage && (
                <p style={{ color: 'red' }}>{errorMessage}</p>
            )}
        </div>
    );
}

export default ToDoList;
