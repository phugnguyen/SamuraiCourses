import React from "react";
import DayOfWeek from "./day_of_week_component";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleTime(oldtime) {
    oldtime = Number(oldtime);
    let hours;
    let minutes;
    let ampm;
    hours = Math.trunc(oldtime / 100);
    minutes = oldtime % 100;

    if (hours > 12) {
      ampm = "PM";
      hours -= 12;
    } else if (hours === 12) {
      ampm = "PM";
    } else {
      ampm = "AM";
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return hours + ":" + minutes;
  }

  render() {
    // Generate [blank, M, T, W, R, F]
    // Generate time range

    // props input is an array where each element is a course_Id
    // find time range

    // replace schedule with something from props

    const { schedule } = this.props;

    // const schedule = [
    //   {
    //     start_time: "900",
    //     end_time: "950",
    //     days: "MWF",
    //     code: "KOR",
    //     course_number: "10"
    //   },
    //   {
    //     start_time: "1500",
    //     end_time: "1550",
    //     days: "MWF",
    //     code: "MATH",
    //     course_number: "10"
    //   },
    //   {
    //     start_time: "1100",
    //     end_time: "1150",
    //     days: "MWF",
    //     code: "CMPSC",
    //     course_number: "10"
    //   },
    //   {
    //     start_time: "1000",
    //     end_time: "1050",
    //     days: "TR",
    //     code: "PHIL",
    //     course_number: "10"
    //   }
    // ];

    let timeRange = [];
    let monday = [],
      tuesday = [],
      wednesday = [],
      thursday = [],
      friday = [];

    schedule.map((course, idx) => {
      timeRange = timeRange.concat([course.start_time, course.end_time]);
      const days = new Set(course.days);
      course = Object.assign({}, course, { colorNumber: idx + 1 });

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
    minutes > 30 ? (end += 100 - minutes) : (end += 30 - minutes);

    const pixPerHour = 45;
    let calendarHeight = (end - begin) / 100;
    calendarHeight *= pixPerHour;

    let timeDivsArr = [];
    for (let i = begin; i < end; i += 100) timeDivsArr.push(i);

    let time = timeDivsArr.map(hour => (
      <>
        <div
          className="left-schedule-time-div"
          id="time-div-top"
          style={{ height: pixPerHour / 2 }}
        >
          {this.handleTime(hour)}
        </div>
        <div
          id="time-div-bottom"
          className="left-schedule-time-div"
          style={{ height: pixPerHour / 2 }}
        />
      </>
    ));

    return (
      <div className="calendar-view-container">
        <div className="days-container">
          <div className="left-schedule-time-div" id="time-div-blank" />
          <div className="days">M</div>
          <div className="days">T</div>
          <div className="days">W</div>
          <div className="days">R</div>
          <div className="days">F</div>
        </div>
        <div className="calendar-rows">
          <div>{time}</div>
          <DayOfWeek
            calendarHeight={calendarHeight}
            pixPerHour={pixPerHour}
            courses={monday}
            begin={begin}
            end={end}
            timeDiv={timeDivsArr}
          />
          <DayOfWeek
            calendarHeight={calendarHeight}
            pixPerHour={pixPerHour}
            courses={tuesday}
            begin={begin}
            end={end}
            timeDiv={timeDivsArr}
          />
          <DayOfWeek
            calendarHeight={calendarHeight}
            pixPerHour={pixPerHour}
            courses={wednesday}
            begin={begin}
            end={end}
            timeDiv={timeDivsArr}
          />
          <DayOfWeek
            calendarHeight={calendarHeight}
            pixPerHour={pixPerHour}
            courses={thursday}
            begin={begin}
            end={end}
            timeDiv={timeDivsArr}
          />
          <DayOfWeek
            calendarHeight={calendarHeight}
            pixPerHour={pixPerHour}
            courses={friday}
            begin={begin}
            end={end}
            timeDiv={timeDivsArr}
          />
        </div>
      </div>
    );
  }
}

export default Calendar;
