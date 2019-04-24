import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LoginComponent from "./components/auth/LoginComponent";
import SignupComponent from "./components/auth/SignupComponent";

export class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/signup" component={SignupComponent} />
        <Route path="/login" component={LoginComponent} />
      </Switch>
    );
  }
}

export default Routes;
