import React from 'react'
import SwimlaneCard from '../SwimlaneCard/SwimlaneCard'

import "./Swimlanes.css"

function Swimlanes() {
  return (
    <>

{/* 
<h2>5 up</h2>
<p><strong>Tip:</strong> Resize to ~1100px for sideways scrolling </p> */}
<section class="swimlanes">
  <div class="swimlanes__column">
    <h6>
        {/* <!-- Heading structure [BoardName]: [ListName]. Where boardName links to the Board --> */}
      Applied
    </h6>
    <ul class="swimlanes__list">
    
      <SwimlaneCard/>
      <li class="swimlanes__listItem">Dummy content goes here</li>
     
    </ul>
  </div>
  <div class="swimlanes__column">
    <h6>
       Technical Round
    </h6>
    <ul class="swimlanes__list">
      <li class="swimlanes__listItem">Dummy content goes here</li>
     
    </ul>
  </div>
  <div class="swimlanes__column">
    <h6>
    Non Technical Round
    </h6>
    <ul class="swimlanes__list">
      <li class="swimlanes__listItem">Dummy content goes here</li>
      <li class="swimlanes__listItem">Dummy content goes here</li>
    </ul>
  </div>
  <div class="swimlanes__column">
    <h6>
    Rejected
    </h6>
    <ul class="swimlanes__list">
      <li class="swimlanes__listItem">Dummy content goes here</li>
    
    </ul>
  </div>
  <div class="swimlanes__column">
    <h6>
     HR Round
    </h6>
    <ul class="swimlanes__list">
      <li class="swimlanes__listItem">Dummy content goes here</li>
    
    </ul>
  </div>
</section>

    </>
  )
}

export default Swimlanes