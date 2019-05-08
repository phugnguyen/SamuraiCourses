import React from "react";
import { connect } from "react-redux";
import CheckBox from "./check_box_component";

const mSTP = state => {
  return {};
};

const mDTP = dispatch => {
  return {};
};

export default connect(
  mSTP,
  mDTP
)(CheckBox);
