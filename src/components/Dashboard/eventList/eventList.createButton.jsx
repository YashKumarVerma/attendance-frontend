import React from "react";
import { connect } from "react-redux";
import InputElement from "../../InputElement";
import { CreateEvent } from "../../../scripts/event";
import { addEvent } from "../../../redux/event/event.action";

class CreateEventButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName: "",
      eventSlug: "",
      eventDescription: "",
      error: false,
      errorMessage: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const eventDetails = {
        eventName: this.state.eventName,
        slug: this.state.eventSlug,
        description: this.state.eventDescription,
        participants: [],
        sessions: [],
      };

      const response = await CreateEvent(eventDetails);
      this.props.addEvent(response);
      console.log("Successfully created new event :  ", response);
      window.$("#createEventModal").modal("hide");

      this.setState({
        eventName: "",
        eventSlug: "",
        eventDescription: "",
      });
    } catch (err) {
      console.log("Error while creating new event", err);
    }
  };

  render() {
    return (
      <div>
        <button
          className="card-link btn btn-outline-primary create-new-event-button"
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
                    Save Event
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
  addEvent: (event) => dispatch(addEvent(event)),
});

export default connect(null, mapDispatchToProps)(CreateEventButton);
