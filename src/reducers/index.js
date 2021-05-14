import { combineReducers } from "redux";
import auth from "./Auth";
import message from "./message";
import welcomemsg from "./Restricted"

export default combineReducers({
  auth,
  message,
  welcomemsg,
});