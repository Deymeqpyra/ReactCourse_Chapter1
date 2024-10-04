import React from 'react'
import './ToDoContainer.css'

function LoadingToDoContainer ({ children }) {
  return (
    <>
      <div className="loadingIcon">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {children}
    </>
  )
}

export default LoadingToDoContainer
