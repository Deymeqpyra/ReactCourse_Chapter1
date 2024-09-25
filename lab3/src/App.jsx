import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ToDoContainer from './components/ToDoContainer'
import PageTitle from './components/PageTitle';

import './App.css'

function App() {
  return (
    <div>
      <PageTitle title="Dovhii To-Do List" />
      <ToDoContainer/>
    </div>
  )
}

export default App
