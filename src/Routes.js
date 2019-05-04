import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import LoginComponent from "./components/auth/LoginComponent";
import SignupComponent from "./components/auth/SignupComponent";
import ContentList from "./components/contents/ContentList";
import ContentDetail from "./components/contents/ContentDetail";

export class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/signup" component={SignupComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route exact path="/contents" component={ContentList} />
        <Route exact path="/contents/new" component={ContentDetail} />
        <Route path="/contents/:id" component={ContentDetail} />
      </Switch>
    );
  }
}

export default Routes;
