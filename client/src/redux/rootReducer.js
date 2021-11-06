import { combineReducers } from "redux"
import eventReducer from "./event/eventReducer"

export default combineReducers({
  event: eventReducer,
})
