import React from "react";
import { Redirect } from "react-router-dom";
import InputElement from "../InputElement";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      redirect: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }
  };

  render() {
    return (
      <div className="row">
        {this.renderRedirect()}
        <div className="col-md-3 col-sm-1"></div>
        <div className="col-md-6 col-sm-10">
          <form onSubmit={this.handleSubmit}>
            <InputElement
              label="Email"
              placeholder="Enter your email"
              type="email"
              name="email"
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
        </div>
        <div className="col-md-3 col-sm-1"></div>
      </div>
    );
  }
}

export default LoginForm;
