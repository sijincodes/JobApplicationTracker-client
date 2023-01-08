import React from "react";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

import "./SideBar.css";

function SideBar({ isOpen, toggleSidebar }) {
  
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <>
      {isOpen && (
        <div className="sideContainer">
          <div className="sidebar open" style={{ paddingTop: "100px" }}>
          <span style={{fontSize:'30px' ,color:"white"}}>Hi {user && user.name} </span>
              <div className="btnContainerSideBar">
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
      )}
     
    </>
  );
}

export default SideBar;



