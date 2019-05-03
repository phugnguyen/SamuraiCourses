import React from "react";
import SchoolIndex from "./school_index";
import { connect } from "react-redux";
import { fetchSchools, fetchSchool } from "../../actions/school_actions";

const mSTP = state => {
  let arr = [];
  Object.values(state.entities.terms).map(term =>
    arr.push(term.season + " " + term.year)
  );

  return {
    schools: Object.values(state.entities.schools),
    terms: arr
  };
};

const mDTP = dispatch => ({
  fetchSchools: () => dispatch(fetchSchools()),
  fetchSchool: id => dispatch(fetchSchool(id))
});

export default connect(
  mSTP,
  mDTP
)(SchoolIndex);
