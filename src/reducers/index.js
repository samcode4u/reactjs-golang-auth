import { combineReducers } from "redux";
import auth from "./Auth";
import message from "./message";

export default combineReducers({
  auth,
  message,
});