import React from "react";
import { connect } from "react-redux";
import SelectCourses from "./select_courses_component";
import { fetchCourses, fetchCourse } from "../../actions/course_actions";

const mSTP = state => {
  return {
    schoolId: state.session.schoolId,
    termId: state.session.term,
    courses: Object.values(state.entities.courses)
  };
};

const mDTP = dispatch => {
  return {
    fetchCourses: termId => dispatch(fetchCourses(termId))
  };
};

export default connect(
  mSTP,
  mDTP
)(SelectCourses);
