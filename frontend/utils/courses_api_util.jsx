export const fetchCourses = termId =>
  $.ajax({
    method: "GET",
    url: "api/courses",
    data: { termId }
  });

// http://localhost:3000/api/courses/show?termId=48&code=KOR&courseNumber=8
// data = {termId: int, code: string, courseNumber: string}
export const fetchCourse = data =>
  $.ajax({
    method: "GET",
    url: "api/courses/show",
    data
  });
