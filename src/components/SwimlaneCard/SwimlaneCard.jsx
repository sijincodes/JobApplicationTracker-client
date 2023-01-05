import React from "react";
import Form from "../Form/Form";

import "./SwimlaneCard.css";

function SwimlaneCard({ testData, provided, snapshot, index, jobData,onClose,isForm ,setIsForm}) {

  const seeMoreForm = () => {
   setIsForm(!isForm);
  };
 
  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    background: isDragging ? "#88A47C" : "#ACCDD8",
    ...draggableStyle,
  });
  return (
    <>
      <div
        className="card"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
      >
        <h1 className="heading">Job Title: {testData.title}</h1>
        <p className="desc">Company: {testData.company}</p>
        <p>Tag</p>

        <button className="button" onClick={seeMoreForm}>
          See More
        </button>
      </div>
      {isForm && <Form onClose={onClose}/>}
    </>
  );
}

export default SwimlaneCard;
