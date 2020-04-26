import React from "react";
import "./dashboard.scss";

class EventListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { eventName, sessions } = this.props.event;
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {eventName}
        <span className="badge badge-primary badge-pill">
          {sessions.length}
        </span>
      </li>
    );
  }
}

export default EventListItem;
