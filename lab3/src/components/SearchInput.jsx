import React from 'react';

function SearchInput({ searchQuery, setSearchQuery }) {
    return (
        <input 
            placeholder="Search" 
            value={searchQuery} 
            onChange={e => setSearchQuery(e.target.value)} 
        />
    );
}

export default SearchInput;
