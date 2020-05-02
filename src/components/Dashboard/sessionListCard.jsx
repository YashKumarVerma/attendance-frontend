import React from "react";

import SessionListItem from "./sessionListItem";
import CreateSessionButton from "./sessionListCreateButton";
import { GetAllSessionsOfEvent } from "../../scripts/session";

class SessionListCard extends React.Component {
  constructor(props) {
    super(props);

    // set state to store items
    this.state = {
      sessions: [],
    };

    // binding functions to state
    this.handleNewSessionReport = this.handleNewSessionReport.bind(this);
    this.handleSessionDeletionReport = this.handleSessionDeletionReport.bind(
      this
    );
  }

  // when component loads initially, populate with active events events
  componentDidMount() {
    GetAllSessionsOfEvent(this.props.activeEvent.slug).then((resp) =>
      this.setState({ sessions: [...resp.payload] })
    );
  }

  componentDidUpdate() {
    GetAllSessionsOfEvent(this.props.activeEvent.slug).then((resp) =>
      this.setState({ sessions: [...resp.payload] })
    );
  }

  render() {
    const { eventName } = this.props.activeEvent;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Sessions</h5>
          <h6 className="card-subtitle mb-2 text-muted">in {eventName}</h6>
          <SessionListItem
            parentEvent={this.props.activeEvent}
            sessions={this.state.sessions}
          />
          <CreateSessionButton
            parentEvent={this.props.activeEvent}
            newSessionUpdater={this.handleNewSessionReport}
          >
            Create New Session
          </CreateSessionButton>
        </div>
      </div>
    );
  }

  //   function to handle callback communications relating to session creation
  handleNewSessionReport = (param) => {
    console.log("Updating current state with newly created session", param);
    this.setState({ sessions: [...this.state.sessions, param] });
  };

  //   function to handle callback communication relating got session deletion
  handleSessionDeletionReport = (param) => {
    console.log("Updating current state after deleting session", param);
  };
}

export default SessionListCard;
