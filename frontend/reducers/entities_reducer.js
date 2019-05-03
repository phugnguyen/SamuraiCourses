import { combineReducers } from "redux";

// schools, terms, courses, schedules
import schools from "./schools_reducer";

export default combineReducers({
  schools
});
