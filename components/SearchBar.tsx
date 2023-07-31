"use client"
import { useState } from 'react';
import { SearchCarFactory } from ".";

function SearchBar() {
    const [factory, setFactory] = useState('')
    const handleSearch = () =>{};

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
        <SearchCarFactory factory={factory} setFactory={setFactory} />

        </div>
    </form>
    
  )
}

export default SearchBar