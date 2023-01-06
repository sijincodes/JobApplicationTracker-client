import React, { useState,useEffect } from "react";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import { swimLaneFieldNames } from "../../components/FilterSelect/FilterSelect";
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
  const [isSwimLane, setIsSwimLane] = useState([]);

  useEffect(() => {
    setIsSwimLane(swimLaneFieldNames);
  }, []);
  const [isAddJobButtonClicked, setIsAddJobButtonClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <DashboardHeader
        isSearch={isSearch}
        toggleSearch={toggleSearch}
        toggleSidebar={handleViewSidebar}
        isFilter={isFilter}
        toggleFilter={toggleFilter}
        isSwimLane={isSwimLane}
        setIsSwimLane={setIsSwimLane}
        isAddJobButtonClicked={isAddJobButtonClicked}
        setIsAddJobButtonClicked={setIsAddJobButtonClicked}
        setSearchQuery={setSearchQuery}
  searchQuery={searchQuery}
 
        
      />

      <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      <Swimlanes isSwimLane={isSwimLane} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </>
  );
}

export default HomePage;
