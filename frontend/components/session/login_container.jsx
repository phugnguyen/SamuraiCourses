import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session";
import Login from "./login";
import { Link } from "react-router-dom";

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "login",
    navLink: <Link to="/signup">Sign Up Instead</Link>
  };
};

const mDTP = dispatch => ({
  login: formUser => dispatch(login(formUser))
});

export default connect(
  mSTP,
  mDTP
)(Login);
