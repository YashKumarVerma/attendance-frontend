import React from "react";

// importing components
import NavBar from "../components/navbar";
import EventListItem from "../components/Dashboard/eventListItem";
import CreateEventButton from "../components/Dashboard/createEvent";
// importing scripts
import { getUserEvents } from "../scripts/requests";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      userEvents: [],
    };

    this.newEventUpdater = this.newEventUpdater.bind(this);
  }

  componentDidMount() {
    getUserEvents()
      .then((eventArray) => this.setState({ userEvents: [...eventArray] }))
      .catch((err) => this.setState({ userEvents: [] }));
  }

  //   handler to append newly created element to current app state
  newEventUpdater = (event) => {
    //   append the element to array and return new item
    this.setState({ userEvents: this.state.userEvents.concat(event) });
    console.log("state updated");
    console.log(event, this.state);
  };

  render() {
    return (
      <div>
        <NavBar isLoggedIn={true} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">User Events</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    listing all events created by you
                  </h6>
                  <p className="card-text">
                    <ul className="list-group">
                      {this.state.userEvents.map((userEvent) => (
                        <EventListItem event={userEvent} />
                      ))}
                    </ul>
                  </p>
                  <CreateEventButton newEventUpdater={this.newEventUpdater}>
                    Create New Event
                  </CreateEventButton>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Event Sessions</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    listing all sessions in the current event
                  </h6>
                  <p className="card-text"></p>
                  <button
                    href="#"
                    className="card-link btn btn-outline-primary"
                  >
                    Card link
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Session Details</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    listing all events created by you
                  </h6>
                  <p className="card-text"></p>
                  <button
                    href="#"
                    className="card-link btn btn-outline-primary"
                  >
                    Card link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
