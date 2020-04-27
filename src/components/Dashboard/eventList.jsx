import React from "react";

// load dependents
import EventListItem from "./eventListItem";
import EventListCreateButton from "./eventListCreateButton";

class EventCardList extends React.Component {
  render() {
    return (
      <div className="card  bg-light">
        <div className="card-body">
          <h5 className="card-title">Events</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            listing all events created by you
          </h6>
          {this.props.userEvents !== undefined ? (
            <small>click to know more</small>
          ) : null}
          <ul className="list-group">
            {this.props.userEvents.map((userEvent) => (
              <EventListItem
                event={userEvent}
                makeEventActive={this.props.makeEventActive}
                key={userEvent._id}
              />
            ))}
          </ul>
          <EventListCreateButton newEventUpdater={this.props.newEventUpdater}>
            Create New Event
          </EventListCreateButton>
        </div>
      </div>
    );
  }
}

export default EventCardList;
