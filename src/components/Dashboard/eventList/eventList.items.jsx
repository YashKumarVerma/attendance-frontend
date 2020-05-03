import React from "react";
import "./../dashboard.scss";

// inviting redux
import { connect } from "react-redux";
import { setActiveEvent } from "../../../redux/event/event.action";

class EventListItems extends React.Component {
  render() {
    const { events } = this.props;
    return (
      <div>
        {events.map((event) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={event.slug}
            onClick={() => {
              this.props.setActiveEvent(event.slug);
            }}
          >
            {event.eventName}
            <span className="badge badge-primary badge-pill">
              {event.sessions.length} Sessions
            </span>
          </li>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setActiveEvent: (eventSlug) => dispatch(setActiveEvent(eventSlug)),
});

const mapStateToProps = (state) => {
  return {
    events: state.events,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventListItems);
