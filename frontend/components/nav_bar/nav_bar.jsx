import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="nav-bar-btns">
      <Link className="nav-btn">{currentUser.username}</Link>
      <Link className="nav-btn" onClick={logout}>
        Log Out
      </Link>
    </div>
  ) : (
    <div className="nav-bar-btns">
      <Link className="nav-btn" to="/login">
        Log In
      </Link>
      <Link className="nav-btn" to="/register">
        Register
      </Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <Link className="logo" to="/">
        <img
          className="logo-img"
          src="https://d29fhpw069ctt2.cloudfront.net/icon/image/49101/preview.svg"
        />
        SamuraiCourses
      </Link>
      {display}
    </header>
  );
};
