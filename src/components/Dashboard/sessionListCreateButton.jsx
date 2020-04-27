import React from "react";
import InputElement from "../InputElement";
import { CreateSession } from "../../scripts/session";

class CreateSessionModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionName: "",
      sessionStartTime: "",
      sessionEndTime: "",
      sessionOvertime: "off",
      sessionSlug: "",
    };
  }

  //   function to update changes to state
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //   function to submit the form and perform login mechanism
  handleSubmit = (event) => {
    event.preventDefault();
    CreateSession({
      sessionName: this.state.sessionName,
      sessionStartTime: this.state.sessionStartTime,
      sessionEndTime: this.state.sessionEndTime,
      sessionOvertime: this.state.sessionOvertime,
      sessionSlug: this.state.sessionSlug,
      parentEvent: this.props.parentEvent,
    })
      .then((resp) => {
        //   when successfully created element, update app state with new element
        this.props.newSessionUpdater(resp.payload);

        console.log(`New Session: ${this.state.sessionSlug}  Created`);

        // reset state
        this.setState({
          sessionName: "",
          sessionStartTime: "",
          sessionEndTime: "",
          sessionOvertime: "off",
          sessionSlug: "",
        });

        // close the modal
        window.$("#createSessionModal").modal("hide");
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
        alert(error.message);
      });
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
                    New Event
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
                    value={this.state.sessionName}
                    onChange={this.handleChange}
                    required
                  />
                  <InputElement
                    label="Session slug"
                    placeholder="a unique, all small, readable, dash separated string for session "
                    type="text"
                    name="sessionSlug"
                    value={this.state.sessionSlug}
                    onChange={this.handleChange}
                    required
                  />

                  <InputElement
                    label="Starting Timestamp"
                    placeholder="starting timestamp when attendance should start"
                    type="datetime-local"
                    name="sessionStartTime"
                    value={this.state.sessionStartTime}
                    onChange={this.handleChange}
                    required
                  />

                  <InputElement
                    label="Ending Timestamp"
                    placeholder="ending timestamp when attendance should stop"
                    type="datetime-local"
                    name="sessionEndTime"
                    value={this.state.sessionEndTime}
                    onChange={this.handleChange}
                    required
                  />

                  <InputElement
                    label="Allow overtime entry ?"
                    placeholder="whether to allow participants to log in after time"
                    type="checkbox"
                    name="sessionOvertime"
                    value={this.state.sessionOvertime}
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

export default CreateSessionModal;
