import React from "react";

function DashboardSideIcon({ toggleSidebar }) {
  return (
    <>
      <span
        className="material-icons"
        onClick={toggleSidebar}
        style={{ cursor: "pointer" }}
      >
        menu
      </span>
    </>
  );
}

export default DashboardSideIcon;
