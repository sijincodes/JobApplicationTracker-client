import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import SwimlaneCard from "../SwimlaneCard/SwimlaneCard";
import "./Swimlanes.css";
import { testData } from "./../../Assets/testData";

function Swimlanes() {
  const [jobData, setjobData] = useState(testData);

  function onDragEnd(result) {
    const { source, destination, draggableId } = result;
    console.log("Jibu draggableId", draggableId);
    console.log("Jibu source", source);
    console.log("Jibu destination", destination);
  }
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
                {...provided.droppableProps}
              >
                <h6>
                  {/* <!-- Heading structure [BoardName]: [ListName]. Where boardName links to the Board --> */}
                  Applied
                </h6>
                <ul className="swimlanes__list">
                  {jobData
                    .filter((elm) => elm.status === "Applied")
                    .map((elm, index) => (
                      <Draggable
                        key={elm.id}
                        draggableId={String(elm.id)}
                        index={elm.id}
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
              </div>
            )}
          </Droppable>
          <Droppable droppableId="Technical Round">
            {(provided, snapshot) => (
              <div
                className="swimlanes__column"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h6>Technical Round</h6>
                <ul className="swimlanes__list">
                  {jobData
                    .filter((elm) => elm.status === "Technical Round")
                    .map((elm, index) => (
                      <Draggable
                        key={elm.id}
                        draggableId={String(elm.id)}
                        index={elm.id}
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
              </div>
            )}
          </Droppable>
          {/* <Droppable droppableId="Non Technical Round">
            {(provided, snapshot) => (
              <div
                className="swimlanes__column"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h6>Non Technical Round</h6>
                <ul className="swimlanes__list">
                  {jobData
                    .filter((elm) => elm.status === "Non Technical Round")
                    .map((elm, provided, snapshot) => (
                      <SwimlaneCard
                        testData={elm}
                        provided={provided}
                        snapshot={snapshot}
                      />
                    ))}
                </ul>
              </div>
            )}
          </Droppable>
          <Droppable droppableId="Rejected">
            {(provided, snapshot) => (
              <div
                className="swimlanes__column"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h6>Rejected</h6>
                <ul className="swimlanes__list">
                  {jobData
                    .filter((elm) => elm.status === "Rejected")
                    .map((elm, provided, snapshot) => (
                      <SwimlaneCard
                        testData={elm}
                        provided={provided}
                        snapshot={snapshot}
                      />
                    ))}
                </ul>
              </div>
            )}
          </Droppable>
          <Droppable droppableId="HR Round">
            {(provided, snapshot) => (
              <div
                className="swimlanes__column"
                ef={provided.innerRef}
                {...provided.droppableProps}
              >
                <h6>HR Round</h6>
                <ul className="swimlanes__list">
                  {jobData
                    .filter((elm) => elm.status === "HR Round")
                    .map((elm, provided, snapshot) => (
                      <SwimlaneCard
                        testData={elm}
                        provided={provided}
                        snapshot={snapshot}
                      />
                    ))}
                </ul>
              </div>
            )}
          </Droppable> */}
        </section>
      </DragDropContext>
    </>
  );
}

export default Swimlanes;
