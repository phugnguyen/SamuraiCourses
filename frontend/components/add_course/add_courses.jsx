import React from "react";

import SelectCoursesContainer from "../schedule/select_courses_container";

import MyCoursesContainer from "../schedule/my_courses_container";

class AddCourses extends React.Component {
  render() {
    return (
      <div className="add-courses">
        <div className="sidebar">
          <SelectCoursesContainer />
          <MyCoursesContainer />
        </div>
        <div className="generate-schedules" />
      </div>
    );
  }
}

export default AddCourses;
