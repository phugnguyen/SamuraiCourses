import * as CourseUtil from "../utils/courses_api_util";

export const RECEIVE_COURSES = "RECEIVE_COURSES";
export const RECEIVE_COURSE = "RECEIVE_COURSE";

const receiveCourses = courses => ({
  type: RECEIVE_COURSES,
  courses
});

export const receiveCourse = course => ({
  type: RECEIVE_COURSE,
  course
});

export const receiveDepartment = department => ({});

export const fetchCourses = termId => dispatch =>
  CourseUtil.fetchCourses(termId).then(courses =>
    dispatch(receiveCourses(courses))
  );

export const fetchCourse = data => dispatch =>
  CourseUtil.fetchCourse(data).then(course => dispatch(receiveCourse(course)));
