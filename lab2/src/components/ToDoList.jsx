import { useState } from "react";
import ToDoItem from "./ToDoItem";
function ToDoList(){
    const[tasks, setTasks] = useState([]);

    const[text, setText] = useState('');

    const [searchQuery, setSearchQuery] = useState('');

    function addTask(text)
    {
        const newTask = {
            id: Math.random(),
            text
        };
        setTasks([...tasks, newTask]);
        setText('');
    }
    function deleteTask(id)
    {
        setTasks(tasks.filter(task => task.id !== id));
    }
   
    const filteredTasks = tasks.filter(task => 
        task.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className="todo-list">
            <input 
                placeholder="Пошук" 
                value={searchQuery} 
                onChange={e => setSearchQuery(e.target.value)} 
            />
            {filteredTasks.map(task => (
                <ToDoItem
                    key={task.id} 
                    task={task}
                    deleteTask={deleteTask}
                />
            ))}
            <input
                value={text}
                onChange={e => setText(e.target.value)} 
            />
            <button onClick={() => addTask(text)}>Add</button>
        </div>
        )
}

export default ToDoList
