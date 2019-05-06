import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="home">
    <h1>Welcome to SamuraiCourses</h1>
    <Link className="nav-btn" to="/selectSchool">
      Plan a schedule!
    </Link>
  </div>
);
