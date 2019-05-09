import React from "react";
import Autocomplete from "../autocomplete/autocomplete";
import { Link } from "react-router-dom";

export default class SelectCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      department: "",
      courseNumber: ""
    };

    this.handleInput = this.handleInput.bind(this);

    this.handleFindCourse = this.handleFindCourse.bind(this);
  }

  handleInput(type, value) {
    return e => {
      this.setState({ [type]: value });
    };
  }

  handleFindCourse() {
    this.props.receiveCourse(this.state);
  }

  render() {
    const { courses } = this.props;
    const { department } = this.state;
    let codes = [];
    let departments = [];
    let courseNumbers = [];
    courses.map(course => {
      codes.push(course.code);
      departments.push(course.department);
      if (department === course.department || department === course.code) {
        courseNumbers.push(course.courseNumber);
      }
    });
    const departmentSearchParams = Array.from(
      new Set(codes.concat(departments))
    );

    const courseNumberSearchParams = Array.from(new Set(courseNumbers));
    return (
      <div className="select-course-form">
        <h2>Select your courses!</h2>
        <h3>Start by adding a course</h3>
        <label htmlFor="department">Department:</label>
        <Autocomplete
          suggestions={departmentSearchParams}
          // must pass down to the child component,
          // if pass down functions it can affet the state
          // of the parent component
          placeHolder="DEPARTMENT"
          handleInput={this.handleInput}
          id="department"
        />
        <br />
        <label htmlFor="course_number">Course Number:</label>
        <Autocomplete
          suggestions={courseNumberSearchParams}
          placeHolder={courseNumberSearchParams}
          handleInput={this.handleInput}
          id="course_number"
        />
        <button className="nav-btn" onClick={this.handleFindCourse}>
          Find Courses!
        </button>
      </div>
    );
  }
}
