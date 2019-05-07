import React from "react";
import SchoolIndexContainer from "./school_index_container";
import SelectCoursesContainer from "../schedule/select_courses_container";

class PlanSchedule extends React.Component {
  render() {
    return (
      <div className="plan-schedule-component">
        <SchoolIndexContainer />
        <SelectCoursesContainer />
        {/* CheckBoxContainer */}
        {/* MyCoursesContainer */}
        {/* GeneratedSchedulesContainer */}
      </div>
    );
  }
}

export default PlanSchedule;
