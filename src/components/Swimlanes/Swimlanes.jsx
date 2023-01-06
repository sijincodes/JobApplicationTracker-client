import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import SwimlaneCard from "../SwimlaneCard/SwimlaneCard";
import "./Swimlanes.css";

import jobTracker from "../../services/job.service";

function Swimlanes({ isSwimLane, setSearchQuery, searchQuery }) {
  const [jobData, setJobData] = useState([]);
  const filteredJobData = jobData.filter((elm) => {
    return (
      elm.jobRole.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  console.log("useEffect - Initial render (Mounting)", jobData);
  useEffect(() => {
    jobTracker.getAll().then((response) => {
      setJobData(response.data);
    });
  }, []);
  function onDragEnd(result) {
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      const updateJobData = [...filteredJobData];
      updateJobData
        .filter((elm) => elm._id === draggableId)
        .map((elm) => (elm.interviewStage = destination.droppableId));

      setJobData(updateJobData);
    }
  }

  // const getListStyle = (isDraggingOver) => ({
  //   background: isDraggingOver ? "lightblue" : "#F2F2F3;",
  // });
  return (
    <>
      {/* 
<h2>5 up</h2>
<p><strong>Tip:</strong> Resize to ~1100px for sideways scrolling </p> */}
      <DragDropContext onDragEnd={onDragEnd}>
        <section className="swimlanes">
          {isSwimLane.some((el) => el.key === "Applied") && (
            <Droppable droppableId={"Applied"}>
              {(provided, snapshot) => (
                <div
                  className="swimlanes__column"
                  ref={provided.innerRef}
                  // style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  <h6>Applied</h6>
                  <ul className="swimlanes__list">
                    {filteredJobData
                      .filter((elm) => elm.interviewStage === "Applied")
                      .map((elm, index) => (
                        <Draggable
                          key={elm._id}
                          draggableId={elm._id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <SwimlaneCard
                              testData={elm}
                              provided={provided}
                              snapshot={snapshot}
                            />
                          )}
                        </Draggable>
                      ))}
                  </ul>{" "}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          )}
          {isSwimLane.some((el) => el.key === "Technical Round") && (
            <Droppable droppableId="Technical Round">
              {(provided, snapshot) => (
                <div
                  className="swimlanes__column"
                  ref={provided.innerRef}
                  // style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  <h6>Technical Round</h6>
                  <ul className="swimlanes__list">
                    {filteredJobData
                      .filter((elm) => elm.interviewStage === "Technical Round")
                      .map((elm, index) => (
                        <Draggable
                          key={elm._id}
                          draggableId={elm._id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <SwimlaneCard
                              testData={elm}
                              provided={provided}
                              snapshot={snapshot}
                            />
                          )}
                        </Draggable>
                      ))}
                  </ul>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          )}
          {isSwimLane.some((el) => el.key === "Non Technical Round") && (
            <Droppable droppableId="Non Technical Round">
              {(provided, snapshot) => (
                <div
                  className="swimlanes__column"
                  ref={provided.innerRef}
                  //  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  <h6>Non Technical Round</h6>
                  <ul className="swimlanes__list">
                    {filteredJobData
                      .filter(
                        (elm) => elm.interviewStage === "Non Technical Round"
                      )
                      .map((elm, index) => (
                        <Draggable
                          key={elm._id}
                          draggableId={elm._id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <SwimlaneCard
                              testData={elm}
                              provided={provided}
                              snapshot={snapshot}
                            />
                          )}
                        </Draggable>
                      ))}
                  </ul>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          )}
          {isSwimLane.some((el) => el.key === "Rejected") && (
            <Droppable droppableId="Rejected">
              {(provided, snapshot) => (
                <div
                  className="swimlanes__column"
                  ref={provided.innerRef}
                  //    style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  <h6>Rejected</h6>
                  <ul className="swimlanes__list">
                    {filteredJobData
                      .filter((elm) => elm.interviewStage === "Rejected")
                      .map((elm, index) => (
                        <Draggable
                          key={elm._id}
                          draggableId={elm._id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <SwimlaneCard
                              testData={elm}
                              provided={provided}
                              snapshot={snapshot}
                            />
                          )}
                        </Draggable>
                      ))}
                  </ul>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          )}
          {isSwimLane.some((el) => el.key === "Hired") && (
            <Droppable droppableId="Hired">
              {(provided, snapshot) => (
                <div
                  className="swimlanes__column"
                  ref={provided.innerRef}
                  //   style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  <h6>Hired</h6>
                  <ul className="swimlanes__list">
                    {filteredJobData
                      .filter((elm) => elm.interviewStage === "Hired")
                      .map((elm, index) => (
                        <Draggable
                          key={elm._id}
                          draggableId={elm._id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <SwimlaneCard
                              testData={elm}
                              provided={provided}
                              snapshot={snapshot}
                            />
                          )}
                        </Draggable>
                      ))}
                  </ul>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          )}
        </section>
      </DragDropContext>
    </>
  );
}

export default Swimlanes;
