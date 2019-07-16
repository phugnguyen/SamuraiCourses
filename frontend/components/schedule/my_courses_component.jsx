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
    this.props.history.push("/addCourse/checkBox");
  }

  handleGenerate() {
    this.props.history.push("/addCourse/generateSchedule");
  }

  render() {
    const { selectedCourses } = this.props;

    let myCourses = Object.keys(selectedCourses).map(courseTitle => (
      <div className="my-course" key={Math.random()}>
        <div>{courseTitle}</div>

        <div>
          <option
            className="my-course-section"
            value={courseTitle}
            onClick={this.handleFindCourse}
          >
            (sections)
          </option>{" "}
        </div>
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
