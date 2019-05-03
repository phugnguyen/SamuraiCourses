import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import NavBarContainer from "./nav_bar/nav_bar_container";
import Home from "./home/home";
import SignUpContainer from "./session/signup_container";
import LogInContainer from "./session/login_container";
import Modal from "./modal/modal";

export default () => (
  <div className="app">
    <Modal />
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={Home} />
  </div>
);