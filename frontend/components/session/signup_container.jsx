import { connect } from "react-redux";
import { createNewUser } from "../../actions/session";
import Signup from "./signup";
import { Link } from "react-router-dom";
import React from "react";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signup",
    navLink: <Link to="/login">log in instead</Link>
  };
};

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
