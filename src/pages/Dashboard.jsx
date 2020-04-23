import React from "react";

// importing components
import NavBar from "../components/navbar";

const Dashboard = () => (
  <div>
    <NavBar isLoggedIn={true} />
    <div className="row">
      <div className="col-md-8 col-sm-12"></div>
      <div className="col-md-4 col-sm-12"></div>
    </div>
  </div>
);

export default Dashboard;
