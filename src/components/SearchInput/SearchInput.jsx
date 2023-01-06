import React from 'react'

import "./SearchInput.css"

function Search({ setSearchQuery, searchQuery }) {
  return (
    <>
        
        <input type="text" className="searchBoxInputBox"  value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for applied Job Role/Company" />
    </>
  )
}

export default Search