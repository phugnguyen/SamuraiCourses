import React from "react";
import { connect } from "react-redux";
import CheckBox from "./check_box_component";

const mSTP = state => {
  //   debugger;
  const courses = Object.values(state.entities.courses);

  return {
    course_number: state.session.course_number,
    department: state.session.department,
    courses
  };
};

const mDTP = dispatch => {
  return {};
};

export default connect(
  mSTP,
  mDTP
)(CheckBox);
