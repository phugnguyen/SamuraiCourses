import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  NUKE_SELECTED_COURSES
} from "../actions/session";

import { RECEIVE_SCHOOL, RECEIVE_TERM } from "../actions/school_actions";

import {
  RECEIVE_COURSE,
  RECEIVE_SELECTED_COURSES
} from "../actions/course_actions";

const _nullSession = {
  currentUser: null
};

export default (state = _nullSession, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      return Object.assign({}, state, { currentUser });
    case RECEIVE_SCHOOL:
      return Object.assign({}, state, { schoolId: action.payload.school.id });
    case RECEIVE_TERM:
      const { term } = action;
      return Object.assign({}, state, { term });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    case RECEIVE_COURSE:
      const { department, course_number } = action.course;
      return Object.assign({}, state, {
        department,
        course_number
      });
    case RECEIVE_SELECTED_COURSES:
      const courses = action.payload.courses || {};
      return Object.assign({}, state, { courses });
    case NUKE_SELECTED_COURSES:
      return Object.assign({}, state, { courses: {} });
    default:
      return state;
  }
};
