import React from "react";

function DashboardSideIcon({ toggleSidebar }) {
  return (
    <>
      <span
        class="material-icons"
        onClick={toggleSidebar}
        style={{ cursor: "pointer" }}
      >
        menu
      </span>
    </>
  );
}

export default DashboardSideIcon;
