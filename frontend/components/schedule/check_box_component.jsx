import React from "react";
import { Link } from "react-router-dom";

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSave = this.handleSave.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleSave() {
    // add to myCourses component
  }

  handleChecked(e) {
    const val = e.target.value;
    const dept = this.props.courses[val].code;
    this.setState({ [dept]: [5, 5] });
    // debugger;
  }

  render() {
    const { course_number, department, courses } = this.props;
    let matchedCourses = Object.values(courses).filter(
      course =>
        course.course_number === course_number &&
        (course.department === department || course.code === department)
    );
    let title = department + " " + course_number;

    matchedCourses = matchedCourses.map(course => {
      return (
        <tr key={Math.random()}>
          <td key={Math.random()}>
            <input
              type="checkbox"
              value={course.id}
              onChange={this.handleChecked}
            />
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
          <tbody>
            <tr>
              <td />
              <td>Time</td>
              <td>Days</td>
            </tr>
            {matchedCourses}
          </tbody>
        </table>
        <button className="nav-btn" onClick={this.handleSave}>
          Save selections!
        </button>
      </div>
    );
  }
}
