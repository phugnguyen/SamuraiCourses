import React from "react";

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

  // convert diff if in format 115 for 1 hour 15 mins
  // or anything over 60 minutes
  convertToMin(duration) {
    return (duration / 100) * 60 + (duration % 100);
  }

  styleDiv(course) {
    const { pixPerHour, begin } = this.props;
    const { start_time, end_time, code, course_number } = course;

    let duration = end_time - start_time;
    if (duration > 60) duration = this.convertToMin(duration);
    duration /= 60;

    const divHeight = duration * pixPerHour;

    let topOffset = ((start_time - begin) / 100) * pixPerHour;

    // TODO: add variable backgroundColor from props
    const style = {
      height: `${divHeight}px`,
      top: `${topOffset}px`,
      backgroundColor: "red"
    };
    return (
      <div className="course-div" style={style}>
        {code + " " + course_number}
      </div>
    );
  }

  render() {
    const { calendarHeight, courses } = this.props;
    let dailySchedule = courses.map(course => this.styleDiv(course));
    const dailyStyle = {
      height: `${calendarHeight}px`
    };

    return (
      <div className="daily-schedule" style={dailyStyle}>
        {dailySchedule}
      </div>
    );
  }
}

export default DayOfWeek;
