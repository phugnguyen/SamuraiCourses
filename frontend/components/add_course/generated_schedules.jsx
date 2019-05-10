import React from "react";

import SelectCoursesContainer from "../schedule/select_courses_container";
import MyCoursesContainer from "../schedule/my_courses_container";
import GeneratedSchedules from "../schedule/generated_schedules_container";

class AddCourses extends React.Component {
  render() {
    return (
      <div className="schedule-view">
        <div className="sidebar">
          <SelectCoursesContainer />
          <MyCoursesContainer />
        </div>
        <GeneratedSchedules />
      </div>
    );
  }
}

export default AddCourses;
