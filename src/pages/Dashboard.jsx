import React from "react";

// importing components
import NavBar from "../components/navbar";
import EventDetailsCard from "../components/Dashboard/eventDetails";
import EventListCard from "../components/Dashboard/eventList";
import SessionListCard from "../components/Dashboard/sessionListCard";

// loading scripts
import { getUserEvents } from "../scripts/requests";

class Dashboard extends React.Component {
  constructor() {
    super();

    // store the list of events in state
    this.state = {
      userEvents: [],
      activeEvent: undefined,
      activeSession: undefined,
    };

    // bind eventUpdater to current state instance
    this.newEventUpdater = this.newEventUpdater.bind(this);
    this.deleteElement = this.deleteElement.bind(this);
    this.makeEventActive = this.makeEventActive.bind(this);
    this.newSessionUpdater = this.newSessionUpdater.bind(this);
    this.makeSessionActive = this.makeSessionActive.bind(this);
  }

  // load list of all events when component loads
  componentDidMount() {
    getUserEvents()
      .then((eventArray) => this.setState({ userEvents: [...eventArray] }))
      .catch((err) => this.setState({ userEvents: [] }));
  }

  //   handler to append newly created element to current app state
  newEventUpdater = (event) => {
    this.setState({ userEvents: this.state.userEvents.concat(event) });
  };

  // handler to delete element from app state
  deleteElement = (elementSlugToBeDeleted) => {
    let newEvents = [];
    for (let i = 0; i < this.state.userEvents.length; i += 1) {
      if (this.state.userEvents[i].slug !== elementSlugToBeDeleted) {
        newEvents.push(this.state.userEvents[i]);
      }
    }

    this.setState({
      activeEvent: undefined,
      activeSession: undefined,
      userEvents: newEvents,
    });
  };

  //   function to make event active when clicked upon
  makeEventActive = (event) => {
    this.setState({
      activeEvent: event,
      activeSession: undefined,
    });

    console.log(event.slug, "is active now");
  };

  makeSessionActive = (session) => {
    console.log("Making Session Active");
    // console.log(session);
  };

  newSessionUpdater = (sessions) => {
    //   if array of sessions passed, when initial data fed,
    console.log(sessions);
    // update the state
    console.log("Updated ActiveEvent State");
  };

  render() {
    return (
      <div>
        <NavBar isLoggedIn={true} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              {/** Show the list of all events */}
              <EventListCard
                userEvents={this.state.userEvents}
                newEventUpdater={this.newEventUpdater}
                makeEventActive={this.makeEventActive}
              />

              <br />

              {/**	Show the event details only if user clicks on any event  */}
              {this.state.activeEvent ? (
                <EventDetailsCard
                  activeEvent={this.state.activeEvent}
                  deleteElement={this.deleteElement}
                />
              ) : null}
            </div>

            <div className="col-md-4 col-sm-12">
              {/**	Show the sessions area only if user clicks on any event  */}
              {this.state.activeEvent ? (
                <SessionListCard
                  activeEvent={this.state.activeEvent}
                  newSessionUpdater={this.newSessionUpdater}
                  makeSessionActive={this.makeSessionActive}
                />
              ) : null}
            </div>

            <div className="col-md-4 col-sm-12">
              {this.state.activeSession ? (
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
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
