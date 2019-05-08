import React from "react";
import { connect } from "react-redux";
import CheckBox from "./check_box_component";

const mSTP = state => {
  const { courses } = state.entities;
  const { course_number, department } = state.session;

  let matchedCourses = Object.values(courses).filter(
    course =>
      course.course_number === course_number &&
      (course.department === department || course.code === department)
  );

  return {
    course_number,
    department,
    courses: matchedCourses
  };
};

const mDTP = dispatch => {
  return {};
};

export default connect(
  mSTP,
  mDTP
)(CheckBox);
