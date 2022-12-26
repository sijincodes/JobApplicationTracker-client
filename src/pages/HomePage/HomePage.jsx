import React, { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import SideBar from "../../SideBar/SideBar";

import "./HomePage.css";

function HomePage() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  return (
    <>
      <DashboardHeader />
      <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    </>
  );
}

export default HomePage;
