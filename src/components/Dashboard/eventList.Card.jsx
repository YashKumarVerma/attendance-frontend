import React from "react";
import { connect } from "react-redux";

// load dependents
// import EventListItem from "./eventListItem";
import CreateNewEventButton from "./eventList.CreateNewEventButton";

const EventListCard = ({ events }) => (
  <div className="card  bg-light">
    {console.log("Listening to events here :", events)}
    <div className="card-body">
      <h5 className="card-title">Events</h5>
      <h6 className="card-subtitle mb-2 text-muted">
        listing all events created by you
      </h6>
      <small>click to know more</small>
      <ul className="list-group">
        Event List Items here
        {/**<EventListItem
            event={userEvent}
            makeEventActive={this.props.makeEventActive}
            key={userEvent._id}
          /> */}
      </ul>
      <CreateNewEventButton>Create New Event</CreateNewEventButton>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    events: state.events,
  };
};

const fuck = connect(mapStateToProps)(EventListCard);
export default fuck;
