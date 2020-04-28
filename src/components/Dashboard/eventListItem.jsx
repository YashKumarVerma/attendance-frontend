import React from "react";
import "./dashboard.scss";

class EventListItem extends React.Component {
  onClickHandler = () => {
    this.props.makeEventActive(this.props.event);
  };

  render() {
    const { eventName, sessions } = this.props.event;
    return (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        onClick={this.onClickHandler}
      >
        {eventName}
        <span className="badge badge-primary badge-pill">
          {/**Sessions : {sessions.length} */}
        </span>
      </li>
    );
  }
}

export default EventListItem;
