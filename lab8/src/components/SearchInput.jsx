import React from 'react'

function SearchInput({ searchQuery, setSearchQuery }) {
  return (
    <input
      className="actionInput"
      placeholder="Search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  )
}

export default SearchInput
