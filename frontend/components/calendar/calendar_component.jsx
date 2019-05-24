import React from "react";
import DayOfWeek from "./day_of_week_component";

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
    let monday = [],
      tuesday = [],
      wednesday = [],
      thursday = [],
      friday = [];

    schedule.map(course => {
      timeRange = timeRange.concat([course.start_time, course.end_time]);
      const days = new Set(course.days);
      if (days.has("M")) monday.push(course);
      if (days.has("T")) tuesday.push(course);
      if (days.has("W")) wednesday.push(course);
      if (days.has("R")) thursday.push(course);
      if (days.has("F")) friday.push(course);
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
        <div>
          <DayOfWeek
            calenderHeight={calenderHeight}
            pixPerHour={pixPerHour}
            courses={monday}
            begin={begin}
            end={end}
          />
        </div>
      </div>
    );
  }
}

export default Calendar;
