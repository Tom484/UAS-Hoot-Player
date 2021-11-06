import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Route, Switch, Redirect } from "react-router-dom"
import { firestore } from "../firebase/firebaseUtils"
import EventPage from "../pages/event/EventPage"
import HomePage from "../pages/home/HomePage"
import NotFoundPage from "../pages/notFound/NotFoundPage"
import { updateDataEvent } from "../redux/event/eventActions"
import { selectEventDataConnect } from "../redux/event/eventSelectors"

const App = ({ eventDataConnect, updateDataEvent }) => {
  const { enterCode } = eventDataConnect || ""
  const [previousEnterCode, setPreviousEnterCode] = useState("")

  useEffect(() => {
    if (!enterCode) return
    if (enterCode === previousEnterCode) return
    setPreviousEnterCode(enterCode)
    firestore
      .collection(`events`)
      .doc(enterCode)
      .collection("properties")
      .doc("event")
      .onSnapshot(snapshot => {
        const data = snapshot.data()
        updateDataEvent(data)
      })

    // eslint-disable-next-line
  }, [eventDataConnect])

  return (
    <div>
      <Switch>
        <Route exact path="/event" component={EventPage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/join/:enterCode?" component={HomePage} />
        <Route exact path="/not-found" component={NotFoundPage} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataConnect: selectEventDataConnect(state),
})

const mapDispatchToProps = dispatch => ({
  updateDataEvent: data => dispatch(updateDataEvent(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
