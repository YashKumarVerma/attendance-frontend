import React from "react";
import { connect } from "react-redux";
import InputElement from "../../InputElement";
import { CreateSession } from "../../../scripts/session";
import { addSession, setActiveEvent } from "../../../redux/event/event.action";

class CreateSessionButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionName: "",
      startTime: "",
      endTime: "",
      slug: "",
      overtime: "off",
    };
  }

  //   function to update changes to state
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //   function to submit the form and perform login mechanism
  handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Creating new session with data : ", this.state);

    try {
      const sessionDetails = {
        participants: [],
        slug: this.state.slug,
        endTime: this.state.endTime,
        startTime: this.state.startTime,
        sessionName: this.state.sessionName,
        overtimePermission: this.state.overtime === "on" ? true : false,
        parent: this.props.activeEventSlug,
      };

      const response = await CreateSession({ session: sessionDetails });
      this.props.addSession(response);
      this.props.setActiveEvent(response[0].parent);

      //   clear the form
      this.setState({
        sessionName: "",
        startTime: "",
        endTime: "",
        slug: "",
        overtime: "off",
      });

      window.$("#createSessionModal").modal("hide");
    } catch (err) {
      console.log("Error while creating new session : ", err);
    }
  };

  render() {
    return (
      <div>
        <button
          className="card-link btn btn-outline-primary create-new-event-button"
          data-target="#createSessionModal"
          data-toggle="modal"
        >
          {this.props.children}
        </button>
        <div
          className="modal fade"
          id="createSessionModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="createSessionModalLabel"
          aria-hidden="true"
        >
          <form onSubmit={this.handleSubmit}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="createSessionModalLabel">
                    Create New Session
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <InputElement
                    label="Session name"
                    placeholder="Enter name of session"
                    type="text"
                    name="sessionName"
                    onChange={this.handleChange}
                    required
                  />
                  <InputElement
                    label="Session slug"
                    placeholder="a unique, all small, readable, dash separated string for session "
                    type="text"
                    name="slug"
                    onChange={this.handleChange}
                    required
                  />

                  <InputElement
                    label="Starting Timestamp"
                    placeholder="starting timestamp when attendance should start"
                    type="datetime-local"
                    name="startTime"
                    onChange={this.handleChange}
                    required
                  />

                  <InputElement
                    label="Ending Timestamp"
                    placeholder="ending timestamp when attendance should stop"
                    type="datetime-local"
                    name="endTime"
                    onChange={this.handleChange}
                    required
                  />

                  <InputElement
                    label="Allow overtime entry ?"
                    placeholder="whether to allow participants to log in after time"
                    type="checkbox"
                    name="overtime"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Session
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addSession: (session) => dispatch(addSession(session)),
  setActiveEvent: (eventSlug) => dispatch(setActiveEvent(eventSlug)),
});

const mapStateToProps = (state) => {
  return {
    activeEventSlug: state.activeEvent.slug,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSessionButton);
