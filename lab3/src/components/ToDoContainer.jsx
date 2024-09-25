import React, { useState } from 'react';
import SearchInput from './SearchInput';
import TableToDo from './TableToDo';
import AddToDoForm from './AddToDoForm';

function ToDoContainer() {
    const [tasks, setTasks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    function addTask(text) {
        const newTask = {
            id: Date.now(),
            text,
        };

        setTasks([...tasks, newTask]);
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const filteredTasks = tasks.filter(task =>
        task.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <SearchInput
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <TableToDo
                tasks={filteredTasks}
                deleteTask={deleteTask}
            />
            <AddToDoForm addTask={addTask} />
        </div>
    );
}

export default ToDoContainer;
