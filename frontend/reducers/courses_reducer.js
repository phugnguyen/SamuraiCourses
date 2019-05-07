import merge from "lodash/merge";

import { RECEIVE_COURSES, RECEIVE_COURSE } from "../actions/course_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COURSES:
      return action.courses;
    default:
      return state;
  }
};
