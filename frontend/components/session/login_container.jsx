import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session";
import Login from "./login";
import { Link } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "login",
    navLink: <Link to="/signup">Sign Up Instead</Link>
  };
};

const mDTP = dispatch => ({
  login: formUser => dispatch(login(formUser)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mSTP,
  mDTP
)(Login);
