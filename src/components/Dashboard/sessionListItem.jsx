import React from "react";
import Moment from "react-moment";
import { DateTimeFormat } from "../../scripts/config";

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
        {sessions.map(({ sessionName, _id, startTime, endTime }) => (
          <div className="card session-details-card" key={_id}>
            <div className="card-header">
              <code>/{sessionName}</code>
            </div>
            <div className="card-body">
              <h5 className="card-title">{sessionName}</h5>
              <p className="card-text">
                <b>Start </b>
                <Moment fromNow>{startTime}</Moment>
                <br />
                <Moment date={startTime} format={DateTimeFormat} />
                <br />
                <br />
                <b>End </b>
                <Moment fromNow>{endTime}</Moment>
                <br />
                <Moment date={endTime} format={DateTimeFormat} />
                <br /> <br />
                <b>Duration :</b>{" "}
                <Moment diff={startTime} unit="minutes">
                  {endTime}
                </Moment>{" "}
                <i> minutes</i>
                <hr />
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
