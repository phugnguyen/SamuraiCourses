import React from "react";

export default class MyCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleFindCourse = this.handleFindCourse.bind(this);
    this.handleGenerate = this.handleGenerate.bind(this);
  }

  handleFindCourse(e) {
    // debugger;
    const [department, course_number] = e.target.value.split(" ");
    this.props.receiveCourse({ department, course_number });
  }

  handleGenerate() {}

  render() {
    const { courses, courseIds } = this.props;
    let arr = [];

    courseIds.map(
      courseId =>
        (arr = arr.concat(
          courses[courseId].code + " " + courses[courseId].course_number
        ))
    );

    arr = Array.from(new Set(arr));

    let myCourses = arr.map(courseTitle => (
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
        <button onClick={this.handleGenerate}>Generate my schedule!</button>
      </div>
    );
  }
}
