import React from "react";
import { DeleteEvent } from "../../scripts/event";

class EventDetails extends React.Component {
  handleDeleteButtonClick = () => {
    DeleteEvent(this.props.activeEvent)
      .then((resp) => {
        const { slug } = this.props.activeEvent;
        console.log(`${slug} deleted`);

        // remove from app state
        this.props.deleteElement(slug);
      })
      .catch((error) => {
        console.log("Error while deleting", error);
      });
  };

  render() {
    const { eventName, slug, description, picture } = this.props.activeEvent;
    return (
      <div className="card  bg-light">
        <div className="card-body">
          <h5 className="card-title">Event Details</h5>
          <h6 className="card-subtitle mb-2 text-muted">in {eventName}</h6>
          {/**<p className="card-text"></p> */}
          <table className="table table-hover">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{eventName} </td>
              </tr>
              <tr>
                <td>Slug</td>
                <td>{slug} </td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{description} </td>
              </tr>
              <tr>
                <td>Feature</td>
                <td>
                  <img
                    src={picture}
                    className="img"
                    alt="Feature of the event"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="button"
            className="card-link btn btn-outline-danger"
            onClick={this.handleDeleteButtonClick}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default EventDetails;
