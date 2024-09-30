import React, { useState } from 'react'
import SearchInput from './SearchInput'
import TableToDo from './TableToDo'
import useGetAllToDo from '../hooks/useGetAllToDo'
import './ToDoContainer.css'

function ToDoContainer() {
  const { data: tasks, isLoading, error, setData } = useGetAllToDo()
  const [text, setText] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

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

  if (isLoading) {
    return <div className='loadingIcon'><div></div><div></div><div></div><div></div></div>
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error.message}</div>
  }

  return (
    <div className="todo-list">
     <div className='actionTodo'>
       <input
        className='actionInput'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <br/>
      <button className='addButton' onClick={() => addTask(text)}>Add</button><br/>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <br/>
      <SearchInput  searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <TableToDo tasks={filteredTasks} deleteTask={deleteTask} />
    </div>
  )
}

export default ToDoContainer
