import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session";
import { RECEIVE_SCHOOL, RECEIVE_TERM } from "../actions/school_actions";
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
    default:
      return state;
  }
};
