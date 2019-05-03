import * as SchoolUtil from "../utils/schools_api_util";

export const RECEIVE_SCHOOLS = "RECEIVE_SCHOOLS";
export const RECEIVE_SCHOOL = "RECEIVE_SCHOOL";
export const RECEIVE_TERMS = "RECEIVE_TERMS";
// export const RECEIVE_TERM = "RECEIVE_TERM";

const receiveSchools = schools => ({
  type: RECEIVE_SCHOOLS,
  schools
});

// separate dispatch for terms?
const receiveSchool = payload => ({
  type: RECEIVE_SCHOOL,
  payload
});

const receiveTerms = ({ payload }) => ({
  type: RECEIVE_TERMS,
  payload
});

// export const receiveTerm =

export const fetchSchools = () => dispatch =>
  SchoolUtil.fetchSchools().then(schools => dispatch(receiveSchools(schools)));

export const fetchSchool = id => dispatch =>
  SchoolUtil.fetchSchool(id)
    .then(payload => dispatch(receiveSchool(payload)))
    .then(payload => dispatch(receiveTerms(payload)));
