import React from "react";

class SessionListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //   render list of cards showing details of session
  render() {
    const sessions = this.props.sessions;

    return (
      <div>
        {sessions.map(({ sessionName, _id }) => (
          <div className="card session-details-card" key={_id}>
            <div className="card-header">
              <code>/{sessionName}</code>
            </div>
            <div className="card-body">
              <h5 className="card-title">{sessionName}</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <button className="btn btn-outline-primary">
                View Participants
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default SessionListItem;
