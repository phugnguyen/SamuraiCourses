import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import NavBarContainer from "./nav_bar/nav_bar_container";
import Home from "./home/home";
import SignUpContainer from "./session/signup_container";
import LogInContainer from "./session/login_container";
import Modal from "./modal/modal";
import PlanSchoolComponent from "./school/plan_schedule_component";
import AddCourses from "./add_course/add_courses";
import CheckBoxContainer from "./schedule/check_box_container";
import GenerateScheduleContainer from "./schedule/generated_schedules_container";

export default () => (
  <div className="app">
    <Modal />
    <Route path="/" component={NavBarContainer} />
    <Route path="/planSchedule" component={PlanSchoolComponent} />
    <Route path="/addCourse" component={AddCourses} />
    <Route path="/addCourse/checkBox" component={CheckBoxContainer} />
    <Route
      path="/addCourse/generateSchedule"
      component={GenerateScheduleContainer}
    />
    <Route exact path="/" component={Home} />
  </div>
);
