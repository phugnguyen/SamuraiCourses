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

  // change to this later
  // componentDidMount() {
  //   this.props.fetchCourses(this.props.termId);
  // }

  render() {
    return (
      <div className="select-course-form">
        <h2>Select your courses!</h2>
        <h3>Start by adding a course</h3>

        <label htmlFor="department">Department:</label>

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
          handleInput={this.handleInput}
          value={this.state.department}
          id="department"
        />

        <label htmlFor="course_number">Course Number:</label>
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
          handleInput={this.handleInput}
          value={this.state.course_number}
          id="course_number"
        />

        <button onClick={this.handleGenerate}>Generate Schedules</button>
      </div>
    );
  }
}
