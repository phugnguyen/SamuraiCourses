import React from "react";

export default class MyCourses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
      <div className="my-course" key={courseTitle}>
        {courseTitle}
      </div>
    ));

    return (
      <div className="my-courses" id="my-courses">
        <h2>My Courses</h2>
        <h3>Your courses are here!</h3>
        {myCourses}
      </div>
    );
  }
}
