import React from "react";
import { start } from "repl";

{
  /* <DayOfWeek
    calenderHeight={calenderHeight}
    pixPerHour={pixPerHour}
    courses={monday}
    begin={begin}
    end={end}
/> */
}

class DayOfWeek extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  styleDiv(course) {
    const { pixPerHour, begin } = this.props;
    const { start_time, end_time } = courses;
    const divHeight = (end_time - start_time) * pixPerHour;
    const topOffset = (start_time - begin) * pixPerHour;

    const style = {
      position: "absolute",
      height: divHeight,
      top: topOffset
    };
    return <div style={style}>{course.code + " " + course.course_number}</div>;
  }

  render() {
    const { calendarHeight, courses } = this.props;
    let dailySchedule = courses.map(course => styleDiv(course));
    const dailyStyle = { height: calendarHeight, position: "relative" };

    return <div style={dailyStyle}>{dailySchedule}</div>;
  }
}

export default DayOfWeek;
