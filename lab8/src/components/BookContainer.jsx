import React, { useState } from 'react'
import AddBookForm from './AddBookForm'
import TableContainer from './TableContainer'
import SearchInput from './SearchInput'

function BookContainer() {
  const [data, setData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  function addBook({ firstName, lastName, phone }) {
    const newBook = {
      id: Date.now(),
      firstName,
      lastName,
      phone,
    }
    setData((prevBooks) => [...prevBooks, newBook])
  }

  function deleteTask(id) {
    setData((prevBooks) => prevBooks.filter((book) => book.id !== id))
  }

  function updateTask(id, updatedData) {
    setData((prevBooks) =>
      prevBooks.map((book) =>
        book.id === id ? { ...book, ...updatedData } : book
      )
    )
  }

  const filteredBooks = data.filter(
    (book) =>
      book.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.phone.includes(searchQuery)
  )

  return (
    <div>
      <AddBookForm addTask={addBook} />
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TableContainer
        books={filteredBooks}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  )
}

export default BookContainer
