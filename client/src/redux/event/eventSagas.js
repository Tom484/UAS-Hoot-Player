import { all, call, put, takeLatest } from "redux-saga/effects"
import { firestore } from "../../firebase/firebaseUtils"

import uuid from "react-uuid"
import EventActions from "./eventTypes"
import { existEventFailure, existEventNotExist, existEventSuccess } from "./eventActions"

export function* joinEventAsync({ payload: { displayName, eventId, history } }) {
  // try {
  //   const collectionRef = yield firestore
  //     .collection(`events`)
  //     .doc(eventId)
  //     .collection("properties")
  //     .doc("connect")
  //   const snapshot = yield collectionRef.get()
  //   const connect = yield snapshot.data()
  //   const playerId = uuid()
  //   if (!connect) return put(joinEventFailure("Enter correct eventId"))
  //   if (!connect.isOpen) return put(joinEventFailure("Event is closed"))
  //   const playersRef = yield firestore
  //     .collection(`events`)
  //     .doc(eventId)
  //     .collection("players")
  //     .doc(playerId)
  //   yield playersRef.set({ id: playerId, displayName, joinAt: new Date().getTime() })
  //   const eventPropertiesEventRef = yield firestore
  //     .collection(`events`)
  //     .doc(eventId)
  //     .collection("players")
  //     .doc(playerId)
  //   const snapShot = yield eventPropertiesEventRef.get()
  //   const eventPropertiesEvent = yield snapShot.data() || {}
  //   console.log(eventPropertiesEvent)
  //   yield put(joinEventSuccess())
  //   yield history.push("/event")
  // } catch (error) {
  //   yield put(joinEventFailure(error.message))
  // }
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
