import React from "react";
import AddJob from "../AddJobButton/AddJob";
import SearchIcon from "../SearchIcon/SearchIcon";
import SearchInput from "../SearchInput/SearchInput";

import "./DashboardHeader.css";

function DashboardHeader({isSearch,toggleSearch}) {

  return (
    <>
      <div className="dashboardContainer">
        <div>
          <span class="material-icons">menu</span>
          <span>Dashboard Header</span>
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
          <div className="buttonContainer">
            <AddJob />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardHeader;
