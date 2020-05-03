import React from "react";
import { connect } from "react-redux";

// load dependents
import EventListItems from "./eventList.items";
import CreateNewEventButton from "./eventList.createButton";

const EventListCard = ({ events }) => (
  <div className="card  bg-light">
    <div className="card-body">
      <h5 className="card-title">Events</h5>
      <h6 className="card-subtitle mb-2 text-muted">
        listing all events created by you
      </h6>
      <small>click to know more</small>
      <ul className="list-group">
        <EventListItems />
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

export default connect(mapStateToProps)(EventListCard);
