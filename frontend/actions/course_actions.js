import * as CourseUtil from "../utils/courses_api_util";

export const RECEIVE_COURSES = "RECEIVE_COURSES";
export const RECEIVE_COURSE = "RECEIVE_COURSE";
export const RECEIVE_SELECTED_COURSES = "RECEIVE_SELECTED_COURSES";

const receiveCourses = courses => ({
  type: RECEIVE_COURSES,
  courses
});

export const receiveCourse = course => ({
  type: RECEIVE_COURSE,
  course
});

// courseIds is an array of Ids
export const receiveSelectedCourses = courseIds => ({
  type: RECEIVE_SELECTED_COURSES,
  courseIds
});

export const receiveDepartment = department => ({});

export const fetchCourses = termId => dispatch =>
  CourseUtil.fetchCourses(termId).then(courses =>
    dispatch(receiveCourses(courses))
  );

export const fetchCourse = data => dispatch =>
  CourseUtil.fetchCourse(data).then(course => dispatch(receiveCourse(course)));
