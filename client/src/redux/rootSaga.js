import { all, call } from "redux-saga/effects"

import { eventSagas } from "./event/eventSagas"

export default function* rootSaga() {
  yield all([call(eventSagas)])
}
