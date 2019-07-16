import React from "react";
import Autocomplete from "../autocomplete/autocomplete";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

// https://stackoverflow.com/questions/9286473/whats-the-equivalent-of-sample-in-javascript
function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

class SelectCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      department: "",
      course_number: ""
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
    this.props.history.push("/addCourse/checkBox");
    // redirect to /addCourse/checkBox
  }

  render() {
    const { courses } = this.props;
    const { department } = this.state;
    let codes = [];
    let departments = [];
    let course_numbers = [];
    courses.map(course => {
      codes.push(course.code);
      departments.push(course.department);
      if (department === course.department || department === course.code) {
        course_numbers.push(course.course_number);
      }
    });
    const departmentSearchParams = Array.from(
      new Set(codes.concat(departments))
    );

    const courseNumberSearchParams = Array.from(new Set(course_numbers));
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
          placeHolder={"e.g. " + sample(departmentSearchParams)}
          handleInput={this.handleInput}
          id="department"
        />
        <br />
        <label htmlFor="course_number">Course Number:</label>
        <Autocomplete
          suggestions={courseNumberSearchParams}
          placeHolder={
            courseNumberSearchParams.length > 0
              ? "e.g. " + courseNumberSearchParams
              : "Please Enter a Department First"
          }
          handleInput={this.handleInput}
          id="course_number"
        />
        <button
          className="nav-btn"
          id="find-courses-btn"
          onClick={this.handleFindCourse}
        >
          Find Courses!
        </button>
      </div>
    );
  }
}

export default withRouter(SelectCourses);
