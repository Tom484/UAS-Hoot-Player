import { all, call, put, select, takeLatest } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"
import uuid from "react-uuid"

import EventActions from "./eventTypes"
import {
  existEventFailure,
  existEventSuccess,
  joinEventDeny,
  joinEventFailure,
  joinEventSuccess,
  voteEventFailure,
  voteEventSuccess,
} from "./eventActions"
import { selectEventDataConnect, selectEventDataProfile } from "./eventSelectors"
import { createNotification } from "../notifications/notificationsActions"
import { NOTIFICATIONS } from "../notifications/notificationsTypes"
import { eventDataSkeleton, eventPlayerSkeleton } from "./eventDataSkeleton"
import { getTimeDifference } from "../../functions/time/getTimeDifference"

export function* joinEventAsync({ payload: { displayName, enterCode, history } }) {
  try {
    const connect = yield eventGetConnectInformation(enterCode)
    if (!connect) return

    const playerId = uuid()
    const playersRef = yield firestore.doc(`events/${enterCode}/players/${playerId}`)

    const playerTimeDifference = yield getTimeDifference()

    yield playersRef.set(
      eventPlayerSkeleton({ displayName, playerId, timeDifference: playerTimeDifference })
    )
    yield put(joinEventSuccess(eventDataSkeleton({ displayName, playerId, enterCode })))

    yield history.push("/event")
  } catch (error) {
    yield put(joinEventFailure(error.message))
  }
}

function* existEventAsync({ payload: { enterCode, history } }) {
  try {
    const connect = yield eventGetConnectInformation(enterCode)
    if (!connect) return

    yield put(existEventSuccess())
    history.push(`/join/${enterCode}`)
  } catch (error) {
    yield put(existEventFailure(error.message))
  }
}

function* voteEventAsync({ payload: { option, submitTime } }) {
  try {
    const profile = yield select(selectEventDataProfile)
    const { enterCode } = yield select(selectEventDataConnect)

    const connectRef = yield firestore.doc(`events/${enterCode}/answers/${profile.id}`)
    yield connectRef.set({ option, submitTime, id: profile.id })

    yield put(voteEventSuccess())
  } catch (error) {
    yield put(voteEventFailure(error.message))
  }
}

function* eventGetConnectInformation(enterCode) {
  const connectRef = yield firestore.doc(`events/${enterCode}/data/connect`)
  const snapshot = yield connectRef.get()
  const connect = yield snapshot.data()
  if (!connect) {
    yield put(joinEventDeny("The event does not exist"))
    yield put(createNotification(NOTIFICATIONS.EVENT_NOT_EXIST))
    return false
  } else if (!connect.isOpen) {
    yield put(joinEventDeny("Event is closed"))
    yield put(createNotification(NOTIFICATIONS.EVENT_IS_CLOSED))
    return false
  }
  return connect
}

export function* joinEventStart() {
  yield takeLatest(EventActions.JOIN_EVENT_START, joinEventAsync)
}

export function* existEventStart() {
  yield takeLatest(EventActions.EXIST_EVENT_START, existEventAsync)
}

export function* voteEventStart() {
  yield takeLatest(EventActions.VOTE_EVENT_START, voteEventAsync)
}

export function* eventSagas() {
  yield all([call(joinEventStart), call(existEventStart), call(voteEventStart)])
}
