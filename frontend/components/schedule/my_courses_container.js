import React from "react";
import { connect } from "react-redux";
import MyCourses from "./my_courses_component";
import { receiveCourse } from "../../actions/course_actions";

const mSTP = state => {
  const defaultCourses = {};
  let selectedCourses = state.session.courses || defaultCourses;

  return {
    courses: state.entities.courses,
    selectedCourses
  };
};

const mDTP = dispatch => {
  return {
    receiveCourse: course => dispatch(receiveCourse(course))
  };
};

export default connect(
  mSTP,
  mDTP
)(MyCourses);
