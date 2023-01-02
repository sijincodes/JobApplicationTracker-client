import React from "react";
import SwimlaneCard from "../SwimlaneCard/SwimlaneCard";

import "./Swimlanes.css";
import { testData } from "./../../Assets/testData";

function Swimlanes() {
  const dragOver = (e) => {
    e.preventDefault();
    console.log("dragging over now");
  };
  const dropOver = (e) => {
    console.log("dropped");
    e.dataTransfer.getData("id");
    console.log(e.dataTransfer.getData("id"));
  };
  return (
    <>
      {/* 
<h2>5 up</h2>
<p><strong>Tip:</strong> Resize to ~1100px for sideways scrolling </p> */}
      <section class="swimlanes">
        <div class="swimlanes__column">
          <h6>
            {/* <!-- Heading structure [BoardName]: [ListName]. Where boardName links to the Board --> */}
            Applied
          </h6>
          <ul class="swimlanes__list">
            {testData
              .filter((elm) => elm.status === "Applied")
              .map((elm) => (
                <SwimlaneCard testData={elm} />
              ))}
          </ul>
        </div>
        <div
          class="swimlanes__column"
          droppable
          onDragOver={(e) => {
            dragOver(e);
          }}
          onDrop={(e) => {
            dropOver(e);
          }}
        >
          <h6>Technical Round</h6>
          <ul class="swimlanes__list">
            {testData
              .filter((elm) => elm.status === "Technical Round")
              .map((elm) => (
                <SwimlaneCard testData={elm} />
              ))}
          </ul>
        </div>
        <div class="swimlanes__column">
          <h6>Non Technical Round</h6>
          <ul class="swimlanes__list">
            {testData
              .filter((elm) => elm.status === "Non Technical Round")
              .map((elm) => (
                <SwimlaneCard testData={elm} />
              ))}
          </ul>
        </div>
        <div class="swimlanes__column">
          <h6>Rejected</h6>
          <ul class="swimlanes__list">
            {testData
              .filter((elm) => elm.status === "Rejected")
              .map((elm) => (
                <SwimlaneCard testData={elm} />
              ))}
          </ul>
        </div>
        <div class="swimlanes__column">
          <h6>HR Round</h6>
          <ul class="swimlanes__list">
            {testData
              .filter((elm) => elm.status === "HR Round")
              .map((elm) => (
                <SwimlaneCard testData={elm} />
              ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Swimlanes;
