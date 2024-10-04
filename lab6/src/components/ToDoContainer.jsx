import React, { useState } from 'react'
import SearchInput from './SearchInput'
import TableToDo from './TableToDo'
import LoadingToDoContainer from './LoadingToDoContainer'
import useGetAllToDo from '../hooks/useGetAllToDo'
import AddToDoItem from './AddToDoItem'
import EditToDoItem from './EditToDoItem'
import './ToDoContainer.css'

function ToDoContainer() {
  const { data: tasks, isLoading, error, setData } = useGetAllToDo()
  const [text, setText] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [editingTaskId, setEditingTaskId] = useState(null)
  const [editingText, setEditingText] = useState('')

function updateTask(id, newTitle) {
  setData((prevTasks) =>
    prevTasks.map((task) => (task.id === id ? { ...task, title: newTitle } : task))
  );
}
  function addTask(text) {
    if (!text.trim()) {
      setErrorMessage('This field is required')
      return
    }

    setErrorMessage('')

    const newTask = {
      id: Date.now(),
      title: text,
    }

    setData((prevTasks) => [...prevTasks, newTask])
    setText('')
  }

  function deleteTask(id) {
    setData((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  const filteredTasks = tasks.filter((task) =>
    task.title?.toLowerCase().includes(searchQuery.toLowerCase())
  )
 
  if (error) {
    return <div style={{ color: 'red' }}>Error: {error.message}</div>
  }

  return (
    <div className="todo-list">
      <LoadingToDoContainer isLoading={isLoading}>
        <div className="actionTodo">
          <AddToDoItem
            text={text}
            setText={setText}
            addTask={addTask}
            errorMessage={errorMessage}
          />
          <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
        
        {editingTaskId ? (
          <EditToDoItem
            task={tasks.find((task) => task.id === editingTaskId)}
            setEditingTaskId={setEditingTaskId}
            updateTask={updateTask}
            setEditingText={setEditingText}
            editingText={editingText}
          />
        ) : (
          <TableToDo
            tasks={filteredTasks}
            deleteTask={deleteTask}
            setEditingTaskId={setEditingTaskId}
            setEditingText={setEditingText}
          />
        )}
      </LoadingToDoContainer>
    </div>
  );
}
export default ToDoContainer
