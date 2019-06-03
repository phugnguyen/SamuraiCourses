import { combineReducers } from "redux";

import modal from "./modal_reducer";
import checkedCourses from "./checkedCourses";

export default combineReducers({
  modal,
  checkedCourses
});
