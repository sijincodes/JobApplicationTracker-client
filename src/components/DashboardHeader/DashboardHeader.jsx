import React from "react";
import AddJob from "../AddJobButton/AddJob";
import DashboardSideIcon from "../DashboardSideIcon/DashboardSideIcon";
import FilterIcon from "../FilterIcon/FilterIcon";
import FilterSelect from "../FilterSelect/FilterSelect";
import Form from "../Form/Form";
import SearchIcon from "../SearchIcon/SearchIcon";
import SearchInput from "../SearchInput/SearchInput";

import "./DashboardHeader.css";

function DashboardHeader({
  isSearch,
  toggleSearch,
  toggleSidebar,
  isFilter,
  toggleFilter,
  setIsSwimLane,
  isSwimLane,
  isAddJobButtonClicked,
  setIsAddJobButtonClicked,
  setSearchQuery,
  searchQuery,
  filteredJobData,
  setJobData,
}) {
  const handleFormToggle = () => {
    setIsAddJobButtonClicked(!isAddJobButtonClicked);
  };

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
              <SearchInput
                setSearchQuery={setSearchQuery}
                searchQuery={searchQuery}
              />
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
              <FilterSelect
                setIsSwimLane={setIsSwimLane}
                isSwimLane={isSwimLane}
              />
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
            <AddJob handleFormToggle={handleFormToggle} />
          </div>
          {isAddJobButtonClicked && (
            <Form
              onClose={handleFormToggle}
              editMode={false}
              filteredJobData={filteredJobData}
              setJobData={setJobData}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
