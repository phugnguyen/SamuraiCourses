import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import NavBarContainer from "./nav_bar/nav_bar_container";
import Home from "./home/home";
import SignUpContainer from "./session/signup_container";

export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={Home} />
    <AuthRoute path="/signup" component={SignUpContainer} />
  </div>
);
