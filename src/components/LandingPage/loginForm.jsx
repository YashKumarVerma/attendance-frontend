import React from "react";
import { Redirect } from "react-router-dom";
import InputElement from "../InputElement";
import { LoginHandler } from "../../scripts/authentication";

class LoginForm extends React.Component {
  constructor() {
    super();

    // set default state of login mechanism
    this.state = {
      email: "",
      password: "",
      redirect: false,
      error: false,
      errorMessage: "",
    };
  }

  //   function to update changes to state
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //   function to submit the form and perform login mechanism
  handleSubmit = (event) => {
    event.preventDefault();

    // call login handler and wait for responses
    LoginHandler(this.state)
      // if success, then let's go to dashboard
      .then((resp) => {
        this.setState({ redirect: true });
      })
      //   if error, go tell to user
      .catch((err) => {
        this.setState({ error: true, errorMessage: err.message });
      });
  };

  //   function to power redirect
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }
  };

  // function to display login form
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderRedirect()}
          <div className="col-md-3 col-sm-1"></div>
          <div className="col-md-6 col-sm-10">
            <form onSubmit={this.handleSubmit}>
              <InputElement
                label="Username"
                placeholder="Enter your username"
                type="text"
                name="username"
                onChange={this.handleChange}
                required
              />
              <InputElement
                label="Password"
                placeholder="Enter your password"
                type="password"
                name="password"
                onChange={this.handleChange}
                required
              />
              <button className="btn btn-outline-primary" type="submit">
                Login
              </button>
            </form>
            <br />
            {this.state.error ? (
              <div className="alert alert-danger" role="alert">
                {this.state.errorMessage}
              </div>
            ) : null}
          </div>

          <div className="col-md-3 col-sm-1"></div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
