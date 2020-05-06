import React from "react";
import NavBar from "../components/navbar";
import EventListCard from "../components/Dashboard/eventList/eventList.card";
import ActiveEventDetailsCard from "../components/Dashboard/eventList/eventList.activeSessionCard";
import SessionsListCard from "../components/Dashboard/sessionList/sessionList.card";
import SessionDetailsCard from "../components/Dashboard/sessionDetails/sessionDetails.card";
import { connect } from "react-redux";
import { InitialLoad } from "../scripts/event";
import { addEvent } from "../redux/event/event.action";

class Dashboard extends React.Component {
  componentDidMount() {
    this.dataFeeder();
  }

  async dataFeeder() {
    const initialDataFeed = await InitialLoad();
    this.props.addEvent(initialDataFeed);
  }

  render() {
    return (
      <div>
        <NavBar isLoggedIn={true} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <EventListCard />
              <ActiveEventDetailsCard />
            </div>

            <div className="col-md-4 col-sm-12">
              <SessionsListCard />
            </div>

            <div className="col-md-4 col-sm-12">
              <SessionDetailsCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEvent: (events) => dispatch(addEvent(events)),
});

export default connect(null, mapDispatchToProps)(Dashboard);
