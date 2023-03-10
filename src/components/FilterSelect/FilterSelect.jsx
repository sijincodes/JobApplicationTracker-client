import React, { useRef } from "react";
import Multiselect from "multiselect-react-dropdown";

export const swimLaneFieldNames = [
  {
    key: "Applied",
  },
  {
    key: "Technical Round",
  },
  {
    key: "Non Technical Round",
  },
  {
    key: "Rejected",
  },
  {
    key: "Hired",
  },
];

function FilterSelect({ setIsSwimLane, isSwimLane }) {
  const multiselectRef = useRef();

  return (
    <div>
      <Multiselect
        avoidHighlightFirstOption="true"
        displayValue="key"
        style={{
          option: {
            backgroundColor: "#FFF4CF",
          },
          placeholder:{color:"black"}
          

        }}
        ref={multiselectRef}
        hideSelectedList
        onRemove={() => {
          const test = multiselectRef.current.getSelectedItems();
          setIsSwimLane([...test]);
        }}
        onSelect={() => {
          const test = multiselectRef.current.getSelectedItems();
          setIsSwimLane([...test]);
        }}
        selectedValues={swimLaneFieldNames}
        options={swimLaneFieldNames}
        showCheckbox
      />
    </div>
  );
}

export default FilterSelect;
