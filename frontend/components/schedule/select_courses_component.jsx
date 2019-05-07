import React from "react";
import AutoComplete from "../autocomplete/autocomplete";
import Autocomplete from "../autocomplete/autocomplete";

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
      console.log(this.state);
    };
  }

  //  Place holder
  handleGenerate() {
    console.log("You're generating my schedules !!");
  }

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

        <Autocomplete
          suggestions={[
            "Alligator",
            "Bask",
            "Crocodilian",
            "Death Roll",
            "Eggs",
            "Jaws",
            "Reptile",
            "Solitary",
            "Tail",
            "Wetlands"
          ]}
          // must pass down to the child component,
          // if pass down functions it can affet the state
          // of the parent component
          placeHolder="DEPARTMENT"
          handleInput={this.handleInput("department")}
          value={this.state.department}
        />

        <Autocomplete
          suggestions={[
            "Alligator",
            "Bask",
            "Crocodilian",
            "Death Roll",
            "Eggs",
            "Jaws",
            "Reptile",
            "Solitary",
            "Tail",
            "Wetlands"
          ]}
          placeHolder="COURSE_NUMBER"
          handleInput={this.handleInput("course_number")}
          value={this.state.course_number}
        />

        <button onClick={this.handleGenerate}>Generate Schedules</button>
      </div>
    );
  }
}
