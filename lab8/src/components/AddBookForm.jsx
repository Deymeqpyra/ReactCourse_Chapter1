import React, { useState } from 'react'

function AddBookForm({ addTask }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  function handleAddTask() {
    let error = ''

    if (!firstName.trim()) {
      error = 'The First Name is required'
    } else if (!lastName.trim()) {
      error = 'The Last Name is required'
    } else if (!phone.trim()) {
      error = 'The Phone number is required'
    }

    if (error) {
      setErrorMessage(error)
      return
    }

    setErrorMessage('')
    addTask({ firstName, lastName, phone })
    setFirstName('')
    setLastName('')
    setPhone('')
  }

  return (
    <div>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <br />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <br />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      <br />
      <button onClick={handleAddTask}>Add</button>
      <br />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  )
}

export default AddBookForm
