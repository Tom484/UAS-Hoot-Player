import EventActions from "./eventTypes"
import { updateDataEvent, updateResultsEvent } from "./eventUtils"

const initialState = {
  isLoading: false,
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
    case EventActions.EXIST_EVENT_START:
    case EventActions.VOTE_EVENT_START:
      return { ...state, isLoading: true, errorMessage: "" }

    case EventActions.JOIN_EVENT_SUCCESS:
      return { ...state, isLoading: false, data: action.payload, errorMessage: "" }

    case EventActions.JOIN_EVENT_DENY:
    case EventActions.EXIST_EVENT_SUCCESS:
    case EventActions.VOTE_EVENT_SUCCESS:
    case EventActions.EXIST_EVENT_NOT_EXIST:
      return { ...state, isLoading: false, errorMessage: "" }

    case EventActions.JOIN_EVENT_FAILURE:
    case EventActions.EXIST_EVENT_FAILURE:
    case EventActions.VOTE_EVENT_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload }

    case EventActions.UPDATE_DATA_EVENT:
      return { ...state, data: updateDataEvent(state.data, action.payload) }
    case EventActions.UPDATE_RESULTS_EVENT:
      return { ...state, data: updateResultsEvent(state.data, action.payload) }
    default:
      return state
  }
}

export default eventReducer
