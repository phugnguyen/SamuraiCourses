import React from "react";
import { connect } from "react-redux";
import SelectCourses from "./select_courses_component";

const mSTP = state => {
  return {
    schoolId: state.session.schoolId,
    termId: state.session.term
  };
};

const mDTP = dispatch => ({});

export default connect(
  mSTP,
  mDTP
)(SelectCourses);
