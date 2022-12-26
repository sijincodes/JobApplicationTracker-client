import React from 'react'

import "./SideBar.css"

function SideBar({isOpen,toggleSidebar}) {
 
  return (
  <>
  {isOpen ? (<>
    <div className='sideContainer'>
    <div className='sideBarContainer'>
    <div>Analytics</div>
    <div> Logout </div>
  </div>
  <div>
  <button  onClick={toggleSidebar} className="sidebar-toggle">
    <span class="material-icons">
navigate_next
</span>
    </button>
    </div>
  </div>
  </>) : (<>
    <button  onClick={toggleSidebar} className="sidebar-toggle">
    <span class="material-icons">
navigate_next
</span>
    </button>
  </>)}

    
  </>
  )
}

export default SideBar