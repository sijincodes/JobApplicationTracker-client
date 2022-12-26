import React from 'react'

import "./SideBar.css"

function SideBar({isOpen,toggleSidebar}) {
  return (
    <div className='sideBarContainer'>
    <div>Analytics</div>
    <div> Logout </div>
   
    <button  className="sidebar-toggle">
    <span class="material-icons">
navigate_next
</span>
    </button>
  </div>
  )
}

export default SideBar