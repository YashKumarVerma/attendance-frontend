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
          <ul className="list-group"></ul>
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
