import React from "react";
import ReactDOM from "react-dom";

import "./Form.css";

function Form() {
  return ReactDOM.createPortal(
    <div className="portal-overlay">
      <div id="modal-root">
        <div class="containerForm">
          <form id="contact" method="post">
            <div class="row">
              <div class="col-25">
                <label for="jobRole">Job Role</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  id="jobRole"
                  name="jobRole"
                  placeholder="Job Role"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="company">Company</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="jobURL">Job URL</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  id="jobURL"
                  name="jobURL"
                  placeholder="Linkedin/Indeed Job post URL "
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="salary">Salary Quoted</label>
              </div>
              <div class="col-75">
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  placeholder="Salary Quoted by you "
                />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="stage">Interview Stage</label>
              </div>
              <div class="col-75">
                <select id="stage" name="stage">
                  <option value="Applied">Applied</option>
                  <option value="techRound">Technical Round</option>
                  <option value="nonTechRound">Non Technical Round</option>
                  <option value="rejected">Rejected</option>
                  <option value="hired">Hired</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="Notes">Notes</label>
              </div>
              <div class="col-75">
                <textarea
                  id="Notes"
                  name="Notes"
                  placeholder="Your notes for this role"
                  style={{ height: "200px" }}
                ></textarea>
              </div>
            </div>
            <div class="row">
              <input type="submit" value="Save" />
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Form;
