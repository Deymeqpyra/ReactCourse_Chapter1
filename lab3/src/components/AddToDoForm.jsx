import React, { useState } from 'react';

function AddToDoForm({ addTask }) {
    const [text, setText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    function handleAddTask() {
        if (!text.trim()) {
            setErrorMessage("This field is required");
            return;
        }

        setErrorMessage('');
        addTask(text);
        setText('');
    }

    return (
        <div>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={handleAddTask}>Add</button>

            {errorMessage && (
                <p style={{ color: 'red' }}>{errorMessage}</p>
            )}
        </div>
    );
}

export default AddToDoForm;
