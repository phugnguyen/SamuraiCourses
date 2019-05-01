import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.username}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/register">
        Register
      </Link>
      <Link className="btn" to="/login">
        Log In
      </Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <div className="hero-img-frame">
        <img
          className="hero-img"
          src="http://images4.fanpop.com/image/photos/24100000/Samurai-Jack-Banner-II-samurai-jack-24107611-2400-300.jpg"
        />
      </div>
      <h1 className="logo">SamuraiCourses</h1>
      <div>{display}</div>
    </header>
  );
};
