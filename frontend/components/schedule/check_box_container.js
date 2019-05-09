import React from "react";
import { connect } from "react-redux";
import CheckBox from "./check_box_component";
import { receiveSelectedCourses } from "../../actions/course_actions";

const mSTP = state => {
  const { courses } = state.entities;
  const { courseNumber, department } = state.session;

  let matchedCourses = Object.values(courses).filter(
    course =>
      course.courseNumber === courseNumber &&
      (course.department === department || course.code === department)
  );

  return {
    courseNumber,
    department,
    courses: matchedCourses
  };
};

// courseIds should be an array of Ids

const mDTP = dispatch => {
  return {
    receiveSelectedCourses: courseIds =>
      dispatch(receiveSelectedCourses(courseIds))
  };
};

export default connect(
  mSTP,
  mDTP
)(CheckBox);
