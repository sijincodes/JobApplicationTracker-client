import React, { useState } from "react";
import Form from "../Form/Form";
import jobTracker from "../../services/job.service";

import "./SwimlaneCard.css";

function SwimlaneCard({
  testData,
  provided,
  snapshot,
  index,
  jobData,
  filteredJobData,
  setJobData,
}) {
  const [isForm, setIsForm] = useState(false);
  const onClose = () => {
    setIsForm(false);
  };
  const seeMoreForm = () => {
    setIsForm(!isForm);
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    background: isDragging ? "#88A47C" : "#ACCDD8",
    ...draggableStyle,
  });

  const deleteCard = async (id) => {
    jobTracker.deleteOne(id).then((response) => {
      setJobData((prevJob) => prevJob.filter((job) => job._id !== id));
    });
  };
  return (
    <>
      <div
        className="card"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
      >
        <h1 className="heading">Job Role: {testData.jobRole}</h1>
        <h2 className="desc">Company: {testData.companyName}</h2>
       
        <div className="buttonCardContainer">
          <button className="button" onClick={seeMoreForm}>
            See More
          </button>
          <button
            className="button deleteBtn"
            onClick={() => deleteCard(testData._id)}
          >
            Delete
          </button>
        </div>
      </div>
      {isForm && (
        <Form
          onClose={onClose}
          editMode={true}
          testData={testData}
          filteredJobData={filteredJobData}
          setJobData={setJobData}
        />
      )}
    </>
  );
}

export default SwimlaneCard;
