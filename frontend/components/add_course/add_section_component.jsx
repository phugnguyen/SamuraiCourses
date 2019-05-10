import React from "react";

import SelectCoursesContainer from "../schedule/select_courses_container";
import MyCoursesContainer from "../schedule/my_courses_container";
import CheckBoxSelection from "../schedule/check_box_container";

class AddCourses extends React.Component {
  render() {
    return (
      <div className="add-courses">
        <div className="sidebar">
          <SelectCoursesContainer />
          <MyCoursesContainer />
        </div>
        <CheckBoxSelection />
      </div>
    );
  }
}

export default AddCourses;
