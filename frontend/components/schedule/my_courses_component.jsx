import React from "react";

export default class MyCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { courses } = this.props;

    return (
      <div className="my-courses" id="my-courses">
        <h2>My Courses</h2>
        <h3>Your courses are here!</h3>
      </div>
    );
  }
}
