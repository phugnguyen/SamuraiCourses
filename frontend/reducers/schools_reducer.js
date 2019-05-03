import merge from "lodash/merge";

import { RECEIVE_SCHOOLS, RECEIVE_SCHOOL } from "../actions/school_actions";

const schoolRedcuer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SCHOOLS:
      return action.schools;
    case RECEIVE_SCHOOL:
      return action.school;
    default:
      return state;
  }
};

export default schoolRedcuer;
