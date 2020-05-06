import React from "react";
import { connect } from "react-redux";

// load dependents

const SessionDetailsCard = ({ activeSession }) => (
  <div>
    {activeSession ? (
      <div className="card  bg-light">
        <div className="card-body">
          <h5 className="card-title">Session Details</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            listing details of session
          </h6>
          <small>click to know more</small>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Rishabh Keshan
              <span className="badge badge-success badge-pill">In Time</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Rohan Arora
              <span className="badge badge-warning badge-pill">Late</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Kashish Mittal
              <span className="badge badge-danger badge-pill">Absent</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Eesha Shetty
              <span className="badge badge-warning badge-pill">Late</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Shovin Kakaraddi
              <span className="badge badge-danger badge-pill">Absent</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Elio Jordan Lopes
              <span className="badge badge-success badge-pill">In Time</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Rithvik Ayithapu
              <span className="badge badge-success badge-pill">In Time</span>
            </li>
          </ul>
        </div>
      </div>
    ) : null}
  </div>
);

const mapStateToProps = (state) => {
  return {
    activeSession: state.activeSession,
  };
};

export default connect(mapStateToProps)(SessionDetailsCard);
