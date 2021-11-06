import { all, call, put, takeLatest } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"
import uuid from "react-uuid"

import EventActions from "./eventTypes"
import {
  existEventFailure,
  existEventNotExist,
  existEventSuccess,
  joinEventDeny,
  joinEventFailure,
  joinEventSuccess,
} from "./eventActions"

export function* joinEventAsync({ payload: { displayName, enterCode, history } }) {
  try {
    const connectRef = yield firestore
      .collection(`events`)
      .doc(enterCode)
      .collection("properties")
      .doc("connect")
    const snapshot = yield connectRef.get()
    const connect = yield snapshot.data()

    if (!connect) {
      yield put(joinEventDeny("Event was not found"))
      return
    } else if (!connect.isOpen) {
      yield put(joinEventDeny("Event is closed"))
      return
    }

    const playerId = uuid()

    const playersRef = yield firestore
      .collection(`events`)
      .doc(enterCode)
      .collection("players")
      .doc(playerId)
    yield playersRef.set({ id: playerId, displayName, joinAt: new Date().getTime() })

    const data = {
      event: {},
      connect: {
        enterCode: enterCode,
      },
      profile: {
        id: playerId,
        displayName,
      },
    }
    yield put(joinEventSuccess(data))
  } catch (error) {
    yield put(joinEventFailure(error.message))
  }
}

function* existEventAsync({ payload: { enterCode, history } }) {
  try {
    const connectRef = yield firestore
      .collection(`events`)
      .doc(enterCode)
      .collection("properties")
      .doc("connect")
    const snapshot = yield connectRef.get()
    const event = yield snapshot.data()
    if (!event) {
      yield put(existEventNotExist("This event do not exist."))
    } else {
      yield put(existEventSuccess())
      history.push(`/join/${enterCode}`)
    }
  } catch (error) {
    yield put(existEventFailure(error.message))
  }
}

export function* joinEventStart() {
  yield takeLatest(EventActions.JOIN_EVENT_START, joinEventAsync)
}

export function* existEventStart() {
  yield takeLatest(EventActions.EXIST_EVENT_START, existEventAsync)
}

export function* eventSagas() {
  yield all([call(joinEventStart), call(existEventStart)])
}
