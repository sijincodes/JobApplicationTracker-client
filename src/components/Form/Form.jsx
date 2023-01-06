import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";

import "./Form.css";
//import jobTracker from "../../services/job.service";

function Form({ onClose, editMode, testData }) {
  console.log("form test data", testData);

  const [updatedJobRole, setUpdatedJobRole] = useState(
    editMode ? testData.jobRole : ""
  );
  const [updatedCompanyName, setUpdatedCompanyName] = useState(
    editMode ? testData.companyName : ""
  );
  const [updatedJobUrl, setUpdatedJobUrl] = useState(
    editMode ? testData.jobUrl : ""
  );
  const [updatedSalary, setUpdatedSalary] = useState(
    editMode ? testData.salary : ""
  );
  const [updatedNotes, setUpdatedNotes] = useState(
    editMode ? testData.notes : ""
  );
  const [updatedInterviewStage, setUpdatedInterviewStage] = useState(
    editMode ? testData.interviewStage : ""
  );

  //  const updateJob = async (id) => {
  //   const body = {
  //     jobRole: updatedJobRole,
  //     companyName: updatedCompanyName,
  //     jobUrl:updatedJobUrl,
  //     salary:updatedSalary,
  //     interviewStage:updatedInterviewStage,
  //     notes:updatedNotes
  //   };

  //     jobTracker.updateOne(id,body).then((response) => {
  //       setUpdatedJobRole(response.data.jobRole);

  //     });

  // };

  return ReactDOM.createPortal(
    <div className="portal-overlay">
      <div id="modal-root">
        <div className="containerForm">
          <form id="contact" method="post">
            <div className="row">
              <div className="col-25">
                <label htmlFor="jobRole">Job Role</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="jobRole"
                  name="jobRole"
                  placeholder="Job Role"
                  value={updatedJobRole}
                  onChange={(e) => setUpdatedJobRole(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="company">Company</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company"
                  value={updatedCompanyName}
                  onChange={(e) => setUpdatedCompanyName(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="jobURL">Job URL</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="jobURL"
                  name="jobURL"
                  placeholder="Linkedin/Indeed Job post URL "
                  value={updatedJobUrl}
                  onChange={(e) => setUpdatedJobUrl(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="salary">Salary Quoted</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  placeholder="Salary Quoted by you "
                  value={updatedSalary}
                  onChange={(e) => setUpdatedSalary(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="stage">Interview Stage</label>
              </div>
              <div className="col-75">
                <select id="stage" name="stage" value={updatedInterviewStage} onChange={(e) => setUpdatedInterviewStage(e.target.value)}>
                  <option className="option" value="Applied">
                    Applied
                  </option>
                  <option className="option" value="techRound">
                    Technical Round
                  </option>
                  <option className="option" value="nonTechRound">
                    Non Technical Round
                  </option>
                  <option className="option" value="rejected">
                    Rejected
                  </option>
                  <option className="option" value="hired">
                    Hired
                  </option>
                
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="Notes">Notes</label>
              </div>
              <div className="col-75">
                <textarea
                  id="Notes"
                  name="Notes"
                  placeholder="Your notes for this role"
                  style={{ height: "200px" }}
                  value={updatedNotes}
                  onChange={(e) => setUpdatedNotes(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="buttonsContainer">
              <div className="row btn">
                <input
                  className="cancelColor"
                  type="submit"
                  value="Cancel"
                  onClick={onClose}
                />
              </div>
              <div className="row btn">
                <input className="saveColor" type="submit" value="Save" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Form;
