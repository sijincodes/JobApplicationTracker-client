import React from "react";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

import "./SideBar.css";

function SideBar({ isOpen, toggleSidebar }) {
  // const sidebarClass = isOpen ? "sidebar open" : "sidebar";
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <>
      {isOpen && (
        <div className="sideContainer">
          <div className="sidebar open" style={{ paddingTop: "100px" }}>
          <span>Hi {user && user.name}</span>
            <div className="btnContainer">
              <div>
                <button className="sidebarBtn">Analytics</button>
              </div>
              <div>
                {/* <button className="sidebarBtn">Logout</button> */}
                {isLoggedIn && (
                  <>
                    <button className="sidebarBtn" onClick={logOutUser}>
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <button onClick={toggleSidebar} className="sidebar-toggle">
        <span className="material-icons">
          {isOpen ? "chevron_left" : "navigate_next"}
        </span>
      </button> */}
    </>
  );
}

export default SideBar;



