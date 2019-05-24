import React from "react";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Generate [blank, M, T, W, R, F]
    // Generate time range

    // props input is an array where each element is a course_Id
    // find time range

    const schedule = [
      {
        start_time: "900",
        end_time: "950",
        days: "MWF",
        code: "KOR",
        course_number: "10"
      },
      {
        start_time: "1000",
        end_time: "1050",
        days: "MWF",
        code: "MATH",
        course_number: "10"
      },
      {
        start_time: "900",
        end_time: "950",
        days: "TR",
        code: "CMPSC",
        course_number: "10"
      },
      {
        start_time: "1000",
        end_time: "1050",
        days: "TR",
        code: "PHIL",
        course_number: "10"
      }
    ];

    const timeRange = [];
    schedule.map(course => {
      timeRange = timeRange.concat([course.start_time, course.end_time]);
    });

    // what time to start and end the weekly schedule at
    // based on the earliest and latest times
    let begin = Math.min(...timeRange);
    let end = Math.max(...timeRange);

    // round begin to the earliest hour
    begin = Math.floor(begin / 100) * 100;

    // round the end to the nearest 30 minutes
    const minutes = end % 100;
    minutes > 30 ? (end += 60 - minutes) : (end += 30 - minutes);

    const pixPerHour = 45;
    const calenderHeight = (end - begin) / 100;
    calenderHeight *= pixPerHour;

    return (
      <div>
        <div>
          <div>Blank</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>R</div>
          <div>F</div>
        </div>
        <div>days of the week</div>
      </div>
    );
  }
}

export default Calendar;
