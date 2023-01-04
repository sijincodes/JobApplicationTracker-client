import React from 'react'

function Filter({handleFilter}) {
  return (
    <>
        <span class="material-icons"  onClick={handleFilter} style={{ cursor: "pointer" }}>
filter_alt
</span>
    </>
  )
}

export default Filter