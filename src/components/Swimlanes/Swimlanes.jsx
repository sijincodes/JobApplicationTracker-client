import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import SwimlaneCard from "../SwimlaneCard/SwimlaneCard";
import "./Swimlanes.css";
import { testData } from "./../../Assets/testData";

function Swimlanes() {
  const [jobData, setJobData] = useState(testData);

  function onDragEnd(result) {
    const { source, destination, draggableId } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      const updateJobData = [...jobData];
      updateJobData
        .filter((elm) => elm.id === draggableId)
        .map((elm) => (elm.status = destination.droppableId));

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
                  {jobData
                    .filter((elm) => elm.status === "Applied")
                    .map((elm, index) => (
                      <Draggable
                        key={elm.id}
                        draggableId={elm.id}
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
                  {jobData
                    .filter((elm) => elm.status === "Technical Round")
                    .map((elm, index) => (
                      <Draggable
                        key={elm.id}
                        draggableId={elm.id}
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
                  {jobData
                    .filter((elm) => elm.status === "Non Technical Round")
                    .map((elm, index) => (
                      <Draggable
                        key={elm.id}
                        draggableId={elm.id}
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
                  {jobData
                    .filter((elm) => elm.status === "Rejected")
                    .map((elm, index) => (
                      <Draggable
                        key={elm.id}
                        draggableId={elm.id}
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
          <Droppable droppableId="HR Round">
            {(provided, snapshot) => (
              <div
                className="swimlanes__column"
                ref={provided.innerRef}
             //   style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                <h6>HR Round</h6>
                <ul className="swimlanes__list">
                  {jobData
                    .filter((elm) => elm.status === "HR Round")
                    .map((elm, index) => (
                      <Draggable
                        key={elm.id}
                        draggableId={elm.id}
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
        </section>
      </DragDropContext>
    </>
  );
}

export default Swimlanes;
