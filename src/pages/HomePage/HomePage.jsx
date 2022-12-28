import React, { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import SideBar from "../../components/SideBar/SideBar";
import Swimlanes from "../../components/Swimlanes/Swimlanes";

import "./HomePage.css";

function HomePage() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  const [isSearch, setIsSearch] = useState(false);
  const toggleSearch = () => {
    setIsSearch(!isSearch);
  };
  return (
    <>
      <DashboardHeader isSearch={isSearch} toggleSearch={toggleSearch} toggleSidebar={handleViewSidebar}/>
   
      <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      <Swimlanes />
     
    </>
  );
}

export default HomePage;
