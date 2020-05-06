import React from "react";
import { Link, Redirect } from "react-router-dom";

class navBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { redirect: false };
  }

  //   function to execure logout mechanism
  handleLogout = () => {
    //   shout out to the world
    console.log("Logging you out");

    // empty localstorage
    localStorage.removeItem("token");

    // now redirect to dashboard
    this.setState({ redirect: true });
  };

  //   function to handle redirect to login screen
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  //   render function to display components
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
            {this.props.isLoggedIn ? (
              <button
                className="btn btn-outline-danger"
                type="button"
                onClick={this.handleLogout}
              >
                Logout
              </button>
            ) : null}
          </form>
        </div>
      </nav>
    );
  }
}

export default navBar;
