import React, { useRef } from "react";
import Multiselect from "multiselect-react-dropdown";

function FilterSelect({setIsSwimLane}) {
 

  const multiselectRef = useRef();

  return (
    <div>
      <Multiselect
        avoidHighlightFirstOption="true"
        displayValue="key"
        style={{
          option: {
            // To change css for dropdown options
            backgroundColor: "#ECE8DD",
          },
        }}
        ref={multiselectRef}
        hideSelectedList
        onKeyPressFn={function noRefCheck() {}}
        onRemove={() => {
          console.log("JibuRemove:", multiselectRef.current.getSelectedItems());
        }}
        onSearch={function noRefCheck() {}}
        onSelect={() => {
         
          const swimLaneArray = multiselectRef.current.getSelectedItems()
         // console.log('swimlaneArray',swimLaneArray.some(el => el.key === 'Applied'))
          setIsSwimLane(swimLaneArray)
        }}
        options={[
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
            key: "HR Round",
          },
        ]}
        showCheckbox
      />
    </div>
  );
}

export default FilterSelect;
