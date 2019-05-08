import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
    <div className="nav-bar-btns">
      <Link to="#" className="nav-btn">
        {currentUser.username}
      </Link>
      <Link to="#" className="nav-btn" onClick={logout}>
        Log Out
      </Link>
    </div>
  ) : (
    <div className="nav-bar-btns">
      <Link to="#" className="nav-btn" onClick={() => openModal("login")}>
        Log In
      </Link>
      <Link to="#" className="nav-btn" onClick={() => openModal("signup")}>
        Register
      </Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <div className="logo-div">
        <Link className="logo" to="/">
          SamuraiCourses
        </Link>
      </div>
      <div className="logo-img">
        <Link className="logo-img" to="/">
          <img
            className="logo-img"
            src="https://d29fhpw069ctt2.cloudfront.net/icon/image/49101/preview.svg"
          />
        </Link>
      </div>
      {display}
    </header>
  );
};
