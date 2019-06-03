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

    // replace schedule with something from props
    const schedule = [
      {
        start_time: "900",
        end_time: "950",
        days: "MWF",
        code: "KOR",
        course_number: "10"
      },
      {
        start_time: "1200",
        end_time: "1250",
        days: "MWF",
        code: "MATH",
        course_number: "10"
      },
      {
        start_time: "1100",
        end_time: "1150",
        days: "MWF",
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

    let timeRange = [];
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
    console.log(begin, end);

    // round begin to the earliest hour
    begin = Math.floor(begin / 100) * 100;

    // round the end to the nearest 30 minutes
    const minutes = end % 100;
    minutes > 30 ? (end += 100 - minutes) : (end += 30 - minutes);

    const pixPerHour = 45;
    let calendarHeight = (end - begin) / 100;
    calendarHeight *= pixPerHour;

    return (
      <div>
        <div className="days-container">
          <div className="days-blank">Blank</div>
          <div className="days">M</div>
          <div className="days">T</div>
          <div className="days">W</div>
          <div className="days">R</div>
          <div className="days">F</div>
        </div>
        <div className="calendar-rows">
          <div>TIME</div>
          <DayOfWeek
            calendarHeight={calendarHeight}
            pixPerHour={pixPerHour}
            courses={monday}
            begin={begin}
            end={end}
          />
          <DayOfWeek
            calendarHeight={calendarHeight}
            pixPerHour={pixPerHour}
            courses={tuesday}
            begin={begin}
            end={end}
          />
          <DayOfWeek
            calendarHeight={calendarHeight}
            pixPerHour={pixPerHour}
            courses={wednesday}
            begin={begin}
            end={end}
          />
          <DayOfWeek
            calendarHeight={calendarHeight}
            pixPerHour={pixPerHour}
            courses={thursday}
            begin={begin}
            end={end}
          />
          <DayOfWeek
            calendarHeight={calendarHeight}
            pixPerHour={pixPerHour}
            courses={friday}
            begin={begin}
            end={end}
          />
        </div>
      </div>
    );
  }
}

export default Calendar;
