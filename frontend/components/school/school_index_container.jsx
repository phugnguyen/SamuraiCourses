import React from "react";
import SchoolIndex from "./school_index";
import { connect } from "react-redux";
import { fetchSchools, fetchSchool } from "../../actions/school_actions";

const mSTP = state => ({
  schools: Object.keys(state.entities.schools).map(
    key => state.entities.schools[key]
  )
});

const mDTP = dispatch => ({
  fetchSchools: () => dispatch(fetchSchools()),
  fetchSchool: id => dispatch(fetchSchool(id))
});

export default connect(
  mSTP,
  mDTP
)(SchoolIndex);
