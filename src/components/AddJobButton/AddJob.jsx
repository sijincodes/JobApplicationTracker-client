import React from 'react'

import "./AddJob.css"

function AddJob({handleFormToggle}) {
  return (
    <>
        <button className="addJobButton" onClick={handleFormToggle}> + Add Job</button>
    </>
  )
}

export default AddJob