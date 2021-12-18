import { combineReducers } from "redux"
import eventReducer from "./event/eventReducer"
import notificationsReducer from "./notifications/notificationsReducer"

export default combineReducers({
  event: eventReducer,
  notifications: notificationsReducer,
})
