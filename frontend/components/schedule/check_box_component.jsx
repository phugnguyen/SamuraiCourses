import React from "react";

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("courses", this.props.courses);
    const { course_number, department, courses } = this.props;
    let matchedCourses = courses.filter(
      course =>
        course.course_number === course_number &&
        (course.department === department || course.code === department)
    );

    matchedCourses = matchedCourses.map(course => {
      return (
        <ul>
          <li key={Math.random()}>
            {course.code + " " + course.course_number}
          </li>
          <li key={Math.random()}>{course.start_time}</li>
          <li key={Math.random()}>{course.end_time}</li>
          <li key={Math.random()}>{course.days}</li>
        </ul>
      );
    });

    return (
      <div className="check-box-component">
        {/* <h2>Select sections for {department + " " + course_number}</h2> */}
        <h2>Select sections for </h2>
        <h3>
          Choose which sections you want us to pick from when creating your
          schedule.
        </h3>
        {matchedCourses}
      </div>
    );
  }
}
