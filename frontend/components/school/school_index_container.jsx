import React from "react";
import SchoolIndex from "./school_index";
import { connect } from "react-redux";
import {
  fetchSchools,
  fetchSchool,
  receiveTerm
} from "../../actions/school_actions";

import { nukeSelectedCourses } from "../../actions/session";

import { fetchCourses, fetchCourse } from "../../actions/course_actions";

const mSTP = state => {
  // let arr = [];
  // Object.values(state.entities.terms).map(term =>
  //   arr.push(term.season + " " + term.year)
  // );

  return {
    schools: Object.values(state.entities.schools),
    terms: Object.values(state.entities.terms)
  };
};

const mDTP = dispatch => ({
  fetchSchools: () => dispatch(fetchSchools()),
  fetchSchool: id => dispatch(fetchSchool(id)),
  receiveTerm: term => dispatch(receiveTerm(term)),
  fetchCourses: termId => dispatch(fetchCourses(termId)),
  nukeSelectedCourses: () => dispatch(nukeSelectedCourses())
});

export default connect(
  mSTP,
  mDTP
)(SchoolIndex);
