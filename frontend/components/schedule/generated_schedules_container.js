import React from "react";
import { connect } from "react-redux";
import GeneratedSchedules from "./generated_schedules_component";

const mSTP = state => {
  const { courses } = state.entities;
  const selectedCourses = state.session.courses || {};
  return {
    courses,
    selectedCourses
  };
};

const mDTP = dispatch => {
  return {};
};

export default connect(
  mSTP,
  mDTP
)(GeneratedSchedules);
