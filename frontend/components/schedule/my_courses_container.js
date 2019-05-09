import React from "react";
import { connect } from "react-redux";
import MyCourses from "./my_courses_component";

const mSTP = state => {
  const defaultIds = {};
  const courseIds = state.session.courseIds || defaultIds;

  return {
    courses: state.entities.courses,
    courseIds: Object.values(courseIds)
  };
};

const mDTP = dispatch => {
  return {};
};

export default connect(
  mSTP,
  mDTP
)(MyCourses);
