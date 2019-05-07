import React from "react";

export default class SelectCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      department: "",
      course_number: ""
    };
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleGenerate() {}

  render() {
    return (
      <div className="select-course-form">
        <h2>Select your courses!</h2>
        <h3>Start by adding a course</h3>

        <label htmlFor="department">Department:</label>
        <input
          id="department"
          type="text"
          onChange={this.handleInput("department")}
          value={this.state.department}
          placeholder="e.g. PHIL or philosophy"
        />
        <label htmlFor="course_number">Course Number:</label>
        <input
          id="course_number"
          type="text"
          onChange={this.handleInput("course_number")}
          value={this.state.course_number}
          placeholder="e.g. 3"
        />
      </div>
    );
  }
}
