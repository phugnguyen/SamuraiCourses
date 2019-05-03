import merge from "lodash/merge";
import { RECEIVE_TERMS } from "../actions/school_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  console.log(action);

  switch (action.type) {
    case RECEIVE_TERMS:
      return action.payload.terms;
    default:
      return state;
  }
};
