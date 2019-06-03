import merge from "lodash/merge";
import { RECEIVE_SELECTED_COURSES } from "../actions/course_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SELECTED_COURSES:
      return action.payload.checkedCourses;
    default:
      return state;
  }
};
