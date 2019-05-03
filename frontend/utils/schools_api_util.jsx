export const fetchSchools = () =>
  $.ajax({
    method: "GET",
    url: "api/schools"
  });

export const fetchSchool = id =>
  $.ajax({
    method: "GET",
    url: `api/schools/${id}`
  });
