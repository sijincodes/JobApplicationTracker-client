import React from "react";
import AddJob from "../AddJobButton/AddJob";
import DashboardSideIcon from "../DashboardSideIcon/DashboardSideIcon";
import Filter from "../Filter/Filter";
import SearchIcon from "../SearchIcon/SearchIcon";
import SearchInput from "../SearchInput/SearchInput";



import "./DashboardHeader.css";

function DashboardHeader({isSearch,toggleSearch,toggleSidebar}) {

  return (
    <>
      <div className="dashboardContainer">
        <div style={{paddingLeft: "15px"}}>
        <DashboardSideIcon toggleSidebar={toggleSidebar}/>
          {/* <span>Dashboard Header</span> */}
        </div>
        <div className="dashboardInnerContainer">
          {isSearch ? (
            <div className="searchContainer">
              <SearchInput />
            </div>
          ) : (
            <div className="searchContainer icon">
              <SearchIcon
                handleClick={() => {
                  toggleSearch();
                }}
              />
            </div>
          )}
          <div className="filterContainer">
            <Filter/>
          </div>
          <div className="buttonContainer">
            <AddJob />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
