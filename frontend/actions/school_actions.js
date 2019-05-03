import * as SchoolUtil from "../utils/schools_api_util";

export const RECEIVE_SCHOOLS = "RECEIVE_SCHOOLS";
export const RECEIVE_SCHOOL = "RECEIVE_SCHOOL";
// export const RECEIVE_TERMS = "RECEIVE_TERMS";
// export const RECEIVE_TERM = "RECEIVE_TERM";

export const receiveSchools = schools => ({
  type: RECEIVE_SCHOOLS,
  schools
});

// receive school will add terms later
export const receiveSchool = ({ school }) => ({
  type: RECEIVE_SCHOOL,
  school
});

export const fetchSchools = () => dispatch =>
  SchoolUtil.fetchSchools().then(schools => dispatch(receiveSchools(schools)));

export const fetchSchool = id => dispatch =>
  SchoolUtil.fetchSchool(id).then(school => dispatch(receiveSchool(school)));
