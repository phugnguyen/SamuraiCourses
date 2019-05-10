import React from "react";

export default class GeneratedSchedules extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.potSchedules = this.potSchedules.bind(this);
    this.arrayCompare = this.arrayCompare.bind(this);
  }

  timesCollide(time1, time2) {
    // time1 and time2 come in as an array of strings
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

    // myAny?
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
        //check if times collide, times come in as strings
        this.timesCollide(
          [course1.start_time].concat(course1.end_time),
          [course2.start_time].concat(course2.end_time)
        )
      ) {
        result = true;
      } else {
        result = false;
      }
    } else {
      result = false;
    }
    return result;
  }

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

  render() {
    const { courses, selectedCourses } = this.props;
    let values = Object.values(selectedCourses);
    if (values.length < 1) values = [[], [], []];
    let masterArr = [];

    for (let i = 0; i < values[0].length; i++) {
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

    const masterScheduleRender = masterArr.map(schedule => {
      return (
        <ul>
          Schedule {Math.random()}
          {schedule.map(courseId => {
            return (
              <>
                <li>
                  {courses[courseId].code +
                    " " +
                    courses[courseId].course_number}
                </li>
                <li>
                  {courses[courseId].start_time +
                    "-" +
                    courses[courseId].end_time}
                </li>
                <li>{courses[courseId].days}</li>
              </>
            );
          })}
        </ul>
      );
    });

    return (
      <div>
        <h2>Generated Schedules</h2>
        <h3>See your generated schedules here</h3>
        {masterScheduleRender}
      </div>
    );
  }
}
