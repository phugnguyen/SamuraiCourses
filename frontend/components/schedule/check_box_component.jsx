import React from "react";
import { Link } from "react-router-dom";

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    const { checkedCourses, myCourses } = this.props;
    this.state = Object.assign({}, checkedCourses, myCourses);

    this.handleSave = this.handleSave.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleSave() {
    const oldState = this.state;
    let courses = {};
    let checkedCourses = {};

    Object.keys(oldState).map(key => {
      if (oldState[key].length > 0) {
        courses[key] = oldState[key];
      } else {
        checkedCourses[key] = oldState[key];
      }
    });

    const newState = { courses, checkedCourses };

    this.props.receiveSelectedCourses(newState);
  }

  handleChecked(e) {
    const { department, course_number } = this.props;
    const { value } = e.target;

    let arr = this.state[department + " " + course_number]
      ? this.state[department + " " + course_number]
      : [];

    arr.includes(value)
      ? (arr = arr.filter(e => e !== value))
      : arr.push(value);

    !!this.state[value]
      ? this.setState({ [value]: !this.state[value] })
      : this.setState({ [value]: true });

    this.setState({ [department + " " + course_number]: arr });
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

    return hours + ":" + minutes + ampm;
  }

  render() {
    let { course_number, department, courses } = this.props;
    let title = department + " " + course_number;

    courses = courses.map(course => {
      return (
        <tr key={Math.random()}>
          <td key={Math.random()}>
            <input
              checked={!!this.state[course.id]}
              type="checkbox"
              value={course.id}
              onChange={this.handleChecked}
            />
          </td>
          <td key={Math.random()}>
            {this.handleTime(course.start_time) +
              " - " +
              this.handleTime(course.end_time)}
          </td>
          <td key={Math.random()}>{course.days}</td>
        </tr>
      );
    });

    return (
      <div className="check-box-component">
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
            {courses}
          </tbody>
        </table>

        <button className="nav-btn" onClick={this.handleSave}>
          Save selections!
        </button>
      </div>
    );
  }
}
