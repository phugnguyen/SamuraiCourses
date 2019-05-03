import { combineReducers } from "redux";

// schools, terms, courses, schedules
import schools from "./schools_reducer";
import terms from "./terms_reducer";

export default combineReducers({
  schools,
  terms
});
