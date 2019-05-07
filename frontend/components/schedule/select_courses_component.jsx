import React from "react";

export default class SelectCourses extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="select-course-form">
        <h2>Select your courses!</h2>
        <h3>{this.props.schoolId}</h3>
        <h3>{this.props.termId}</h3>
      </div>
    );
  }
}
