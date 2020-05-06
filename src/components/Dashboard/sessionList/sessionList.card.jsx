import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { DateTimeFormat } from "../../../scripts/config";
import { DeleteSession } from "../../../scripts/session";
import CreateSessionButton from "./sessionList.createButton";
import {
  deleteSession,
  setActiveEvent,
  setActiveSession,
} from "../../../redux/event/event.action";

class SessionListCard extends React.Component {
  async handleDeleteClick(sessionToDelete) {
    try {
      const sessionDetails = {
        slug: sessionToDelete.slug,
        parent: sessionToDelete.parent,
      };

      const response = await DeleteSession({ session: sessionDetails });
      this.props.deleteSession(sessionDetails);
      this.props.setActiveEvent(sessionDetails.parent);
    } catch (err) {
      console.log("Error while deleting session : ", err);
    }
  }

  render() {
    const { activeEvent } = this.props;
    return (
      <div>
        {activeEvent ? (
          <div className="card  bg-light">
            <div className="card-body">
              <h5 className="card-title">Sessions</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                listing all sessions in {activeEvent.eventName}
              </h6>
              <small>click to know more</small>
              {activeEvent.sessionDetails.map((session) => (
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
                        format={DateTimeFormat}
                      />
                      <br />
                      <br />
                      <b>End </b>
                      <Moment fromNow>{session.endTime}</Moment>
                      <br />
                      <Moment date={session.endTime} format={DateTimeFormat} />
                      <br /> <br />
                      <b>Duration :</b>
                      <Moment diff={session.startTime} unit="minutes">
                        {session.endTime}
                      </Moment>{" "}
                      <i> minutes</i>
                    </p>
                    <hr />
                    <button
                      className="btn btn-outline-primary session-card-button"
                      onClick={() => this.props.setActiveSession(session.slug)}
                    >
                      View Participants
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => this.handleDeleteClick(session)}
                    >
                      Delete Session
                    </button>
                  </div>
                </div>
              ))}
              <CreateSessionButton>Create New Session</CreateSessionButton>
            </div>
          </div>
        ) : (
          <div>Select an event to view sessions</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { activeEvent: state.activeEvent };
};

const mapDispatchToProps = (dispatch) => ({
  deleteSession: (session) => dispatch(deleteSession(session)),
  setActiveEvent: (event) => dispatch(setActiveEvent(event)),
  setActiveSession: (sessionSlug) => dispatch(setActiveSession(sessionSlug)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionListCard);
