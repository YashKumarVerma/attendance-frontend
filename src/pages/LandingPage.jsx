import React from "react";

// importing components
import NavBar from "../components/navbar";
import MainMast from "../components/LandingPage/mainMast";
import LoginForm from "../components/LandingPage/loginForm";

const LandingPage = () => (
  <div>
    <NavBar isLoggedIn={false} />
    <MainMast />
    <LoginForm />
  </div>
);

export default LandingPage;
