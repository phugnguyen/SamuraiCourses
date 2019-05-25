import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_util";
import NavBarContainer from "./nav_bar/nav_bar_container";
import Home from "./home/home";
import Modal from "./modal/modal";
import PlanSchoolComponent from "./school/plan_schedule_component";
import AddCourses from "./add_course/add_courses";
import CheckBoxContainer from "./add_course/add_section_component";
import GenerateScheduleContainer from "./add_course/generated_schedules";
import CalendarComponent from "./calendar/calendar_component";

export default () => (
  <div className="app">
    <Modal />
    <Route path="/" component={NavBarContainer} />
    <Route path="/calendar" component={CalendarComponent} />
    <Route path="/planSchedule" component={PlanSchoolComponent} />
    <Route exact path="/addCourse/checkBox" component={CheckBoxContainer} />
    <Route
      exact
      path="/addCourse/generateSchedule"
      component={GenerateScheduleContainer}
    />
    <Route exact path="/addCourse" component={AddCourses} />
    <Route exact path="/" component={Home} />
  </div>
);
