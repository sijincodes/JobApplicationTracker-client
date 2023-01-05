import React from 'react'

import "./AddJob.css"

function AddJob({handleClick}) {
  return (
    <>
        <button className="addJobButton" onClick={handleClick}> + Add Job</button>
    </>
  )
}

export default AddJob