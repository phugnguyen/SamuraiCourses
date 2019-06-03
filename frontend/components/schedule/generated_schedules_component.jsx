import React from "react";
import CalendarComponent from "../calendar/calendar_component";
import Calendar from "../calendar/calendar_component";

export default class GeneratedSchedules extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 1: [], currentSchedule: 1 };
    this.arrayCompare = this.arrayCompare.bind(this);
  }

  timesCollide(time1, time2) {
    // time1 and time2 come in as an array of strings
    // in military time
    // time1 = ["900", "950"]
    // time2 = ["1300", "1350"]

    time1 = time1.map(time => Number(time));
    time2 = time2.map(time => Number(time));

    // The times do not collide if
    // a.start > b.end , a starts after b ends
    // or
    // a.end < b.start , a ends before b starts

    let result;

    if (time1[0] > time2[1] || time1[1] < time2[0]) {
      result = false;
    } else {
      result = true;
    }
    return result;
  }

  daysCollide(days1, days2) {
    // days1 = "MWF"
    // days2 = "TR" etc

    days2 = days2.split("");

    // myAny? Implementation

    let result = false;
    for (let i = 0; i < days2.length; i++) {
      if (days1.includes(days2[i])) result = true;
    }

    return result;
  }

  isCollision(course1, course2) {
    // see if the courses have overlapping days
    // course1 and course2 are objects
    let result;
    if (this.daysCollide(course1.days, course2.days)) {
      if (
        // check if times collide, times come in as strings
        this.timesCollide(
          [course1.start_time].concat(course1.end_time),
          [course2.start_time].concat(course2.end_time)
        )
      ) {
        // nested if loops may not provide an accurate return
        // instead I saved it to a variable and returned it at
        // the end
        result = true;
      } else {
        result = false;
      }
    } else {
      result = false;
    }
    return result;
  }

  // compares two arrays and returns a 2d array
  // where I compare the entire first array to an element
  // in the second array, if it passes the proc
  // then we create a new array with that element pushed in

  arrayCompare(arr1, arr2) {
    const { courses } = this.props;

    // arr1 and arr2 are arrays of course Ids
    let subArr = [];
    for (let i = 0; i < arr2.length; i++) {
      if (arr1.every(el => !this.isCollision(courses[el], courses[arr2[i]]))) {
        subArr.push(arr1.concat(arr2[i]));
      }
    }
    return subArr;
  }

  handleNextSchedule(arg) {
    const { currentSchedule } = this.state;
    if (arg === "prev" && currentSchedule > 1) {
      this.setState({ currentSchedule: currentSchedule - 1 });
    } else if (arg === "next" && currentSchedule + 1 < this.state.length + 1) {
      this.setState({ currentSchedule: currentSchedule + 1 });
    }
  }

  componentDidMount() {
    const { courses, selectedCourses } = this.props;

    // values should come in as a 2d array where each row represents
    // a different course and its offerings

    let values = Object.values(selectedCourses);
    if (values.length < 1) values = [[], [], []];

    // our return 2d array
    let masterArr = [];

    // array traversal
    // result must contain all courses selected
    // or else we will return an error later

    // [[5,6,7,8] , [9,10,11,12], [13,14,15,16]]

    // {days: "MWF", start: "1200", end: "1250"}

    // we are make every possible comparison
    for (let i = 0; i < values[0].length; i++) {
      // have to store in a sub array since we will be traversing
      // this array later on
      let subArr = [[values[0][i]]];
      for (let j = 1; j < values.length; j++) {
        let subArr2 = [];
        for (let k = 0; k < subArr.length; k++) {
          subArr2 = subArr2.concat(this.arrayCompare(subArr[k], values[j]));
        }
        subArr = subArr2;
      }
      masterArr = masterArr.concat(subArr);
    }

    // store individual schedules in the local state
    masterArr.forEach((schedule, idx) => {
      schedule = schedule.map(courseId => courses[courseId]);
      this.setState({ [idx + 1]: schedule });
    });
    this.setState({ length: masterArr.length });
  }

  render() {
    const { currentSchedule } = this.state;
    return (
      <div className="generate-schedules">
        <h2>Generated Schedules</h2>
        <h3>See your generated schedules here</h3>
        {/* render selection bar? */}
        <button onClick={() => this.handleNextSchedule("prev")}>Prev</button>
        <button onClick={() => this.handleNextSchedule("next")}>Next</button>
        <CalendarComponent schedule={this.state[currentSchedule]} />
      </div>
    );
  }
}
