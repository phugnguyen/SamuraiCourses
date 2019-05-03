import React from "react";
import SchoolIndex from "./school_index";
import { connect } from "react-redux";
import { fetchSchools } from "../../actions/school_actions";

const mSTP = state => ({
  schools: Object.keys(state.entities.schools).map(
    key => state.entities.schools[key]
  )
});

const mDTP = dispatch => ({
  fetchSchools: () => dispatch(fetchSchools())
});

export default connect(
  mSTP,
  mDTP
)(SchoolIndex);
