import React from "react";
import { Link } from "react-router-dom";

const navBar = ({ isLoggedIn }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
      Attendance
    </a>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto"></ul>
      <span className="navbar-text pull-right">
        {isLoggedIn ? (
          <Link to="/logout">
            <button type="button" className="btn btn-outline-danger">
              Logout
            </button>
          </Link>
        ) : null}
      </span>
    </div>
  </nav>
);

export default navBar;
