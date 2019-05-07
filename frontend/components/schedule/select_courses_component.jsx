import React from "react";
import Autocomplete from "../autocomplete/autocomplete";

export default class SelectCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      department: "",
      course_number: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleGenerate = this.handleGenerate.bind(this);
  }

  handleInput(type, value) {
    return e => {
      this.setState({ [type]: value });
      console.log(this.state);
    };
  }

  //  Place holder
  handleGenerate() {
    console.log("You're generating my schedules !!");
    console.log(this.state);
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
          placeHolder="DEPARTMENT"
          handleInput={this.handleInput}
          id="department"
        />

        <label htmlFor="course_number">Course Number:</label>
        <Autocomplete
          suggestions={courseNumberSearchParams}
          placeHolder="COURSE_NUMBER"
          handleInput={this.handleInput}
          id="course_number"
        />

        <button onClick={this.handleGenerate}>Generate Schedules</button>
      </div>
    );
  }
}
