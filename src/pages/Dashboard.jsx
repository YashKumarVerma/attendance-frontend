import React from "react";
import NavBar from "../components/navbar";
import EventListCard from "../components/Dashboard/eventList/eventList.card";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <NavBar isLoggedIn={true} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <EventListCard />
            </div>
            {/**
            <div className="col-md-4 col-sm-12">Session List Card</div>

				<div className="col-md-4 col-sm-12">Session List Card</div>
			*/}
            {/**<div className="col-md-4 col-sm-12">
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
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
