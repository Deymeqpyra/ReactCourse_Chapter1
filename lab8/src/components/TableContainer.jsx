import React, { useState } from 'react';

function TableContainer({ books, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(null);
  const [editedBook, setEditedBook] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  function handleEdit(book) {
    setIsEditing(book.id);
    setEditedBook({
      firstName: book.firstName,
      lastName: book.lastName,
      phone: book.phone,
    });
  }

  function handleSave(id) {
    const { firstName, lastName, phone } = editedBook;

    let error = '';

    if (!firstName.trim()) {
      error = 'The First Name is required';
    } else if (!lastName.trim()) {
      error = 'The Last Name is required';
    } else if (!phone.trim()) {
      error = 'The Phone number is required';
    }

    if (error) {
      setErrorMessage(error);
      return;
    }

    setErrorMessage('');

    updateTask(id, { firstName, lastName, phone });

    setIsEditing(null);
  }

  return (
    <div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <table>
        <thead>
          <tr>
            <th>Id</th> 
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td> 
                <td>
                  {isEditing === book.id ? (
                    <input
                      type="text"
                      value={editedBook.firstName}
                      onChange={(e) =>
                        setEditedBook({
                          ...editedBook,
                          firstName: e.target.value,
                        })
                      }
                    />
                  ) : (
                    book.firstName
                  )}
                </td>
                <td>
                  {isEditing === book.id ? (
                    <input
                      type="text"
                      value={editedBook.lastName}
                      onChange={(e) =>
                        setEditedBook({
                          ...editedBook,
                          lastName: e.target.value,
                        })
                      }
                    />
                  ) : (
                    book.lastName
                  )}
                </td>
                <td>
                  {isEditing === book.id ? (
                    <input
                      type="text"
                      value={editedBook.phone}
                      onChange={(e) =>
                        setEditedBook({ ...editedBook, phone: e.target.value })
                      }
                    />
                  ) : (
                    book.phone
                  )}
                </td>
                <td>
                  {isEditing === book.id ? (
                    <button onClick={() => handleSave(book.id)}>Save</button>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(book)}>Edit</button>
                      <button onClick={() => deleteTask(book.id)}>
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data to display</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableContainer;
