import React from "react";
import { withRouter } from "react-router-dom";

class MyCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleFindCourse = this.handleFindCourse.bind(this);
    this.handleGenerate = this.handleGenerate.bind(this);
  }

  handleFindCourse(e) {
    const [department, course_number] = e.target.value.split(" ");
    this.props.receiveCourse({ department, course_number });
  }

  handleGenerate() {
    this.props.history.push("/addCourse/generateSchedule");
    //redirect to /addCourse/generateSchedule
  }

  render() {
    const { selectedCourses } = this.props;

    let myCourses = Object.keys(selectedCourses).map(courseTitle => (
      <div className="my-course" key={Math.random()}>
        {courseTitle}

        <option
          className="my-course-section"
          value={courseTitle}
          onClick={this.handleFindCourse}
        >
          Change your sections here
        </option>
      </div>
    ));

    return (
      <div className="my-courses" id="my-courses">
        <h2>My Courses</h2>
        <h3>Your courses are here!</h3>
        {myCourses}
        <button className="nav-btn" onClick={this.handleGenerate}>
          Generate my schedule!
        </button>
      </div>
    );
  }
}

export default withRouter(MyCourses);
