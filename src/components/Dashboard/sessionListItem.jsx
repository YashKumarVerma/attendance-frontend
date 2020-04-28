import React from "react";
import Moment from "react-moment";
import { DateTimeFormat } from "../../scripts/config";
import DeleteSessionButton from "./sessionListDeleteButton";

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
        {sessions.map((session) => (
          <div className="card session-details-card" key={session._id}>
            <div className="card-header">
              <code>/{session.sessionName}</code>
              <span className=" badge badge-primary badge-pill participant-count-badge">
                Participants : {session.participants.length}
              </span>
            </div>

            <div className="card-body">
              <h5 className="card-title">{session.sessionName}</h5>
              <p className="card-text">
                <b>Start </b>
                <Moment fromNow>{session.startTime}</Moment>
                <br />
                <Moment
                  date={session.startTime}
                  format={session.DateTimeFormat}
                />
                <br />
                <br />
                <b>End </b>
                <Moment fromNow>{session.endTime}</Moment>
                <br />
                <Moment
                  date={session.endTime}
                  format={session.DateTimeFormat}
                />
                <br /> <br />
                <b>Duration :</b>
                <Moment diff={session.startTime} unit="minutes">
                  {session.endTime}
                </Moment>{" "}
                <i> minutes</i>
                <hr />
              </p>
              <button className="btn btn-outline-primary session-card-button">
                View Participants
              </button>
              <DeleteSessionButton
                session={session}
                handleSessionDeletionReport={
                  this.props.handleSessionDeletionReport
                }
              >
                Delete Session
              </DeleteSessionButton>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default SessionListItem;
