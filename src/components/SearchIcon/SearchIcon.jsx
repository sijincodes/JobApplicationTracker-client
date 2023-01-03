import React from "react";

function SearchIcon({ handleClick }) {
  return (
    <span
      className="material-icons"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      search
    </span>
  );
}

export default SearchIcon;
