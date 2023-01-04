import React from "react";

function Filter({ handleFilter }) {
  return (
    <>
      <span
        className="material-icons"
        onClick={handleFilter}
        style={{ cursor: "pointer" }}
      >
        filter_alt
      </span>
    </>
  );
}

export default Filter;
