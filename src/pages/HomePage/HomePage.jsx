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
  const [isFilter, setIsFilter] = useState(false);
  const toggleFilter = () => {
    setIsFilter(!isFilter);
  };
  const [isSwimLane,setIsSwimLane]=useState([])
  return (
    <>
      <DashboardHeader
        isSearch={isSearch}
        toggleSearch={toggleSearch}
        toggleSidebar={handleViewSidebar}
        isFilter={isFilter}
        toggleFilter={toggleFilter}
        setIsSwimLane={setIsSwimLane}
      />

      <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      <Swimlanes isSwimLane={isSwimLane}/>
    </>
  );
}

export default HomePage;
