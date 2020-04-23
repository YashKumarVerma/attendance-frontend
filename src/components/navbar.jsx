import React from "react";
import { Link } from "react-router-dom";

const navBar = ({ isLoggedIn }) => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">
      Attendance
    </a>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto"></ul>
      <span class="navbar-text pull-right">
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
