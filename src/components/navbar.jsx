import React from "react";
import { Link, Redirect } from "react-router-dom";

class navBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { redirect: false };
  }

  handleLogout = () => {
    console.log("Logging you out");
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        {this.renderRedirect()}
        <Link to="/">
          <div className="navbar-brand">Attendance App</div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarExpansion"
          aria-controls="navbarExpansion"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarExpansion">
          <ul className="navbar-nav mr-auto"></ul>
          <form className="form-inline my-2 my-md-0">
            <button
              className="btn btn-outline-danger"
              type="button"
              onClick={this.handleLogout}
            >
              Logout
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default navBar;
