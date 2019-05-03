import { combineReducers } from "redux";
import session from "./session";
import entities from "./entities";
import errors from "./errors_reducer";
import ui from "./ui_reducer";

export default combineReducers({
  entities,
  session,
  errors,
  ui
});
