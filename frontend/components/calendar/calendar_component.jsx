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
    return (
      <div>
        <h3>Schedule here</h3>
      </div>
    );
  }
}

export default Calendar;
