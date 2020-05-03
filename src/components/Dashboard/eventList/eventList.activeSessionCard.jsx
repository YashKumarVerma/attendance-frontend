import React from "react";
import { connect } from "react-redux";
// import { deleteEvent } from "../../../redux/event/event.action";
// import { DeleteEvent } from "../../scripts/event";

class EventDetails extends React.Component {
  async deleteButtonHandler(eventSlug) {
    alert("Will try deleting event in near future. Urgent ? Send PR");
    // try {
    //   const response = await deleteEvent(eventSlug);
    //   console.log(response);
    // } catch (err) {
    //   console.log("Error while deleting event");
    // }
  }

  render() {
    const { activeEvent } = this.props;
    return (
      <div>
        {activeEvent ? (
          <div className="card event-details-card  bg-light">
            <div className="card-body">
              <h5 className="card-title">Event Details</h5>
              <table className="table table-hover">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{activeEvent.eventName}</td>
                  </tr>
                  <tr>
                    <td>Slug</td>
                    <td>{activeEvent.slug}</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>{activeEvent.description}</td>
                  </tr>
                </tbody>
              </table>
              <button
                type="button"
                className="card-link btn btn-outline-danger"
                onClick={() => this.deleteButtonHandler(activeEvent.slug)}
              >
                Delete
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   deleteEvent: (eventSlug) => dispatch(deleteEvent(eventSlug)),
// });

const mapStateToProps = (state) => {
  return {
    activeEvent: state.activeEvent,
  };
};

export default connect(mapStateToProps)(EventDetails);
