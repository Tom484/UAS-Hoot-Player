import { all, call, put, select, takeLatest } from "redux-saga/effects"
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
  voteEventFailure,
  voteEventSuccess,
} from "./eventActions"
import { selectEventDataConnect, selectEventDataProfile } from "./eventSelectors"
import { createNotification } from "../notifications/notificationsActions"

export function* joinEventAsync({ payload: { displayName, enterCode, history } }) {
  try {
    const connectRef = yield firestore
      .collection(`events`)
      .doc(enterCode)
      .collection("data")
      .doc("connect")
    const snapshot = yield connectRef.get()
    const connect = yield snapshot.data()

    if (!connect) {
      yield put(joinEventDeny("Event was not found"))

      yield put(
        createNotification({
          title: "Event not found",
          message: "You may enter wrong event code. Please try again.",
          type: "warning",
        })
      )
      return
    } else if (!connect.isOpen) {
      yield put(joinEventDeny("Event is closed"))
      yield put(
        createNotification({
          title: "Event was closed",
          message: "This event was closed, please ask admin to open event.",
          type: "warning",
        })
      )
      return
    }
    const playerId = uuid()

    const playersRef = yield firestore
      .collection(`events`)
      .doc(enterCode)
      .collection("players")
      .doc(playerId)
    yield playersRef.set({
      id: playerId,
      displayName,
      joinAt: new Date().getTime(),
      score: 0,
      lastScore: 0,
      lastAnswer: false,
      lastDataUpdateSlideIndex: -1,
      consecutiveCorrectAnswers: 0,
    })

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
    yield history.push("/event")
  } catch (error) {
    yield put(joinEventFailure(error.message))
  }
}

function* existEventAsync({ payload: { enterCode, history } }) {
  try {
    const connectRef = yield firestore
      .collection(`events`)
      .doc(enterCode)
      .collection("data")
      .doc("connect")
    const snapshot = yield connectRef.get()
    const event = yield snapshot.data()
    if (!event) {
      yield put(existEventNotExist("This event do not exist."))
      yield put(
        createNotification({
          title: "Event not found",
          message: "You may enter wrong event code. Please try again.",
          type: "warning",
        })
      )
    } else {
      yield put(existEventSuccess())
      history.push(`/join/${enterCode}`)
    }
  } catch (error) {
    yield put(existEventFailure(error.message))
  }
}

function* voteEventAsync({ payload: { option, submitTime } }) {
  try {
    const profile = yield select(selectEventDataProfile)
    const connect = yield select(selectEventDataConnect)

    const connectRef = yield firestore
      .collection(`events`)
      .doc(connect.enterCode)
      .collection("answers")
      .doc(profile.id)
    yield connectRef.set({ option, submitTime, id: profile.id })

    yield put(voteEventSuccess())
  } catch (error) {
    yield put(voteEventFailure(error.message))
  }
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
