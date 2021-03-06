import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="home">
    <h1>Welcome to SamuraiCourses</h1>
    <img src={window.samuraiGate} className="home-img" />
    <Link className="nav-btn" to="/planSchedule">
      Plan your schedule!
    </Link>
  </div>
);
