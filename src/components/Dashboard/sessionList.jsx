import React from "react";

import SessionListItem from "./sessionListItem";
import CreateSessionButtion from "./sessionListCreateButton";

class SessionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    //   fetch all sessions of currently active event
    const { eventSessions } = this.props;
    const { activeEvent } = this.props;
  }

  render() {
    return (
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title">Sessions</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            in {this.props.activeEvent.eventName}
          </h6>
          <CreateSessionButtion
            newSessionUpdater={this.props.newSessionUpdater}
          >
            Create New Session
          </CreateSessionButtion>
        </div>
      </div>
    );
  }
}

export default SessionList;
