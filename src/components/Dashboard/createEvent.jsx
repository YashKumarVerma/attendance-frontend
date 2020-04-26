import React from "react";
import InputElement from "../InputElement";
import { CreateEvent } from "../../scripts/event";

class CreateEventModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName: "",
      eventSlug: "",
      eventDescription: "",
      error: false,
      errorMessage: "",
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
    CreateEvent(this.state)
      .then((resp) => {
        //   when successfully created element, update app state with new element
        this.props.newEventUpdater({
          participants: [],
          sessions: [],
          picture: "http://via.placeholder.com/150",
          eventName: this.state.eventName,
          slug: this.state.eventSlug,
          admin: localStorage.getItem("username"),
          description: this.state.description,
        });
        console.log("New Event Created");

        // close the modal
        window.$("#createEventModal").modal("hide");
      })
      .catch((error) => {
        alert(error.message);
        this.setState({ errorMessage: error.message });
      });
  };

  render() {
    return (
      <div>
        <button
          className="card-link btn btn-outline-primary"
          data-target="#createEventModal"
          data-toggle="modal"
        >
          {this.props.children}
        </button>
        <div
          className="modal fade"
          id="createEventModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="createEventModalLabel"
          aria-hidden="true"
        >
          <form onSubmit={this.handleSubmit}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="createEventModalLabel">
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
                    label="Event name"
                    placeholder="Enter name of event"
                    type="text"
                    name="eventName"
                    onChange={this.handleChange}
                    required
                  />
                  <InputElement
                    label="Event slug"
                    placeholder="a unique, all small, readable, dash separated string for event "
                    type="text"
                    name="eventSlug"
                    onChange={this.handleChange}
                    required
                  />
                  <InputElement
                    label="Event Description"
                    placeholder="A short description about the event"
                    type="text"
                    name="eventDescription"
                    onChange={this.handleChange}
                    required
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
                    Create New Event
                  </button>
                </div>
              </div>
            </div>
            {this.state.error ? (
              <div className="alert alert-danger" role="alert">
                {this.state.errorMessage}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    );
  }
}

export default CreateEventModal;
