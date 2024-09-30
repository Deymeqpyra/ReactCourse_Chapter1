import React, { useState } from 'react'
import SearchInput from './SearchInput'
import TableToDo from './TableToDo'
import LoadingToDoContainer from './LoadingToDoContainer'
import useGetAllToDo from '../hooks/useGetAllToDo'
import AddToDoItem from './AddToDoItem'
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
 
  if (error) {
    return <div style={{ color: 'red' }}>Error: {error.message}</div>
  }

  return (
    <div className="todo-list">
    <LoadingToDoContainer isLoading={isLoading}>
      <div className='actionTodo'>
        <AddToDoItem
          text={text}
          setText={setText}
          addTask={addTask}
          errorMessage={errorMessage}
        />
        <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <TableToDo tasks={filteredTasks} deleteTask={deleteTask} />
    </LoadingToDoContainer>
    </div>
  )
}

export default ToDoContainer
