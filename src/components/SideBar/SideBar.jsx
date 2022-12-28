import React from "react";

import "./SideBar.css";

function SideBar({ isOpen, toggleSidebar }) {
  // const sidebarClass = isOpen ? "sidebar open" : "sidebar";
  return (
    <>
      {isOpen && (
        <div className="sideContainer">
          <div className="sidebar open" style={{paddingTop:"100px"}}>
            <div>Analytics</div>
            <div> Logout </div>
          </div>
        </div>
      )}
      {/* <button onClick={toggleSidebar} className="sidebar-toggle">
        <span class="material-icons">
          {isOpen ? "chevron_left" : "navigate_next"}
        </span>
      </button> */}
    </>
  );
}

export default SideBar;
