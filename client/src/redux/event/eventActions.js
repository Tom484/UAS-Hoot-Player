import EventAction from "./eventTypes"

export const joinEventStart = properties => ({
  type: EventAction.JOIN_EVENT_START,
  payload: properties,
})

export const joinEventSuccess = data => ({
  type: EventAction.JOIN_EVENT_SUCCESS,
  payload: data,
})
export const joinEventDeny = reason => ({
  type: EventAction.JOIN_EVENT_DENY,
  payload: reason,
})

export const joinEventFailure = errorMessage => ({
  type: EventAction.JOIN_EVENT_FAILURE,
  payload: errorMessage,
})

export const existEventStart = properties => ({
  type: EventAction.EXIST_EVENT_START,
  payload: properties,
})

export const existEventSuccess = data => ({
  type: EventAction.EXIST_EVENT_SUCCESS,
  payload: data,
})

export const existEventNotExist = reason => ({
  type: EventAction.EXIST_EVENT_NOT_EXIST,
  payload: reason,
})

export const existEventFailure = errorMessage => ({
  type: EventAction.EXIST_EVENT_FAILURE,
  payload: errorMessage,
})

export const voteEventStart = data => ({
  type: EventAction.VOTE_EVENT_START,
  payload: data,
})

export const voteEventSuccess = data => ({
  type: EventAction.VOTE_EVENT_SUCCESS,
  payload: data,
})

export const voteEventFailure = errorMessage => ({
  type: EventAction.VOTE_EVENT_FAILURE,
  payload: errorMessage,
})

export const updateDataEvent = data => ({
  type: EventAction.UPDATE_DATA_EVENT,
  payload: data,
})

export const updateResultsEvent = data => ({
  type: EventAction.UPDATE_RESULTS_EVENT,
  payload: data,
})
