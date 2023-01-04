import React from "react";
import AddJob from "../AddJobButton/AddJob";
import DashboardSideIcon from "../DashboardSideIcon/DashboardSideIcon";
import FilterIcon from "../FilterIcon/FilterIcon";
import FilterSelect from "../FilterSelect/FilterSelect";
import SearchIcon from "../SearchIcon/SearchIcon";
import SearchInput from "../SearchInput/SearchInput";

import "./DashboardHeader.css";

function DashboardHeader({
  isSearch,
  toggleSearch,
  toggleSidebar,
  isFilter,
  toggleFilter,
  setIsSwimLane
}) 

{
  return (
    <>
      <div className="dashboardContainer">
        <div style={{ paddingLeft: "15px" }}>
          <DashboardSideIcon toggleSidebar={toggleSidebar} />
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
          {isFilter ? (
            <div>
              <FilterSelect setIsSwimLane={setIsSwimLane}/>
            </div>
          ) : (
            <div className="filterContainer">
              <FilterIcon
                handleFilter={() => {
                  toggleFilter();
                }}
              />
            </div>
          )}

          <div className="buttonContainer">
            <AddJob />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
