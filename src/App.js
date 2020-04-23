import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

// importing pages
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
