import EventActions from "./eventTypes"
import { updateDataEvent, updateResultsEvent } from "./eventUtils"

const initialState = {
  isJoiningEvent: false,
  isExistingEvent: false,
  isVotingEvent: false,
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
    results: {},
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
    case EventActions.VOTE_EVENT_START:
      return { ...state, isVotingEvent: true, errorMessage: "" }
    case EventActions.VOTE_EVENT_SUCCESS:
      return { ...state, isVotingEvent: false, errorMessage: "" }
    case EventActions.VOTE_EVENT_FAILURE:
      return { ...state, isVotingEvent: false, errorMessage: action.payload }
    case EventActions.UPDATE_DATA_EVENT:
      return { ...state, data: updateDataEvent(state.data, action.payload) }
    case EventActions.UPDATE_RESULTS_EVENT:
      return { ...state, data: updateResultsEvent(state.data, action.payload) }
    default:
      return state
  }
}

export default eventReducer
