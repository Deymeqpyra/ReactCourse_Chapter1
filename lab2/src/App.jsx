import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToDoList from './components/ToDoList'
import './App.css'

function App() {
  // const [inputValue, setInputValue] = useState()

  // const [toDoList, setToDoList] = useState([])

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value)
  // }
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   setToDoList((prevState) => {
  //     if (toDoList.length === 0) {
  //       return [{ id: Math.random(), title: inputValue }]
  //     }
  //     return [{
  //       ...prevState,
  //       id: Math.random(),
  //       title: inputValue,
  //     }]
  //   })
  // }
  return (
    <div >
      <ToDoList/>
    </div>
  )
}

export default App
