import React from "react";
import { connect } from "react-redux";
import CheckBox from "./check_box_component";

const mSTP = state => {
  return {
    course_number: state.session.course_number,
    department: state.session.department,
    courses: state.entities.courses
  };
};

const mDTP = dispatch => {
  return {};
};

export default connect(
  mSTP,
  mDTP
)(CheckBox);
