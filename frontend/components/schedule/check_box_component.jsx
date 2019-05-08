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
    let title = department + " " + course_number;

    matchedCourses = matchedCourses.map(course => {
      return (
        <tr>
          <td key={Math.random()}>
            <input type="radio" />
          </td>
          <td key={Math.random()}>
            {course.start_time + "-" + course.end_time}
          </td>
          <td key={Math.random()}>{course.days}</td>
        </tr>
      );
    });

    return (
      <div className="check-box-component">
        {/* <h2>Select sections for {department + " " + course_number}</h2> */}
        <h2>Select sections for {title}</h2>
        <h3>
          Choose which sections you want us to pick from when creating your
          schedule.
        </h3>

        <table>
          <th />
          <th>Time</th>
          <th>Days</th>
          <tbody>{matchedCourses}</tbody>
        </table>
      </div>
    );
  }
}
