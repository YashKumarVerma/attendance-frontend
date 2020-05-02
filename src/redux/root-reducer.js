import { combineReducers } from "redux";

import sessionReducer from "./session/session.reducer";
import eventReducer from "./event/event.reducer";

export default combineReducers({
  session: sessionReducer,
  event: eventReducer,
});
