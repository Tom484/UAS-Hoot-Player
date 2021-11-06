import EventActions from "./eventTypes"
import { updateDataEvent } from "./eventUtils"

const initialState = {
  isJoiningEvent: false,
  isExistingEvent: false,
  errorMessage: "",
  data: {
    event: {},
    connect: {
      enterCode: "",
    },
    profile: {
      id: "",
      displayName: "",
    },
  },
}

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case EventActions.JOIN_EVENT_START:
      return { ...state, isJoiningEvent: true, errorMessage: "" }
    case EventActions.JOIN_EVENT_SUCCESS:
      return { ...state, isJoiningEvent: false, data: action.payload, errorMessage: "" }
    case EventActions.JOIN_EVENT_DENY:
      return { ...state, isJoiningEvent: false, errorMessage: "" }
    case EventActions.JOIN_EVENT_FAILURE:
      return { ...state, isJoiningEvent: false, errorMessage: action.payload }
    case EventActions.EXIST_EVENT_START:
      return { ...state, isExistingEvent: true, errorMessage: "" }
    case EventActions.EXIST_EVENT_SUCCESS:
      return { ...state, isExistingEvent: false, errorMessage: "" }
    case EventActions.EXIST_EVENT_NOT_EXIST:
      return { ...state, isExistingEvent: false, errorMessage: "" }
    case EventActions.EXIST_EVENT_FAILURE:
      return { ...state, isExistingEvent: false, errorMessage: action.payload }
    case EventActions.UPDATE_DATA_EVENT:
      return { ...state, data: updateDataEvent(state.data, action.payload) }
    default:
      return state
  }
}

export default eventReducer