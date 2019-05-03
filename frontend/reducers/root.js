import { combineReducers } from "redux";
import sessionReducer from "./session";
import entitiesReducer from "./entities";
import errors from "./errors_reducer";

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errors
});
