import React from 'react'

function SearchIcon({handleClick}) {
  return (
  
   <span class="material-icons" onClick={handleClick} style={{ cursor: 'pointer'}}>
search
</span>

  )
}

export default SearchIcon