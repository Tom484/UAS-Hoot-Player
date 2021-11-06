import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Route, Switch, Redirect } from "react-router-dom"
import { firestore } from "../firebase/firebaseUtils"
import EventPage from "../pages/event/EventPage"
import HomePage from "../pages/home/HomePage"
import NotFoundPage from "../pages/notFound/NotFoundPage"
import { updateEventData } from "../redux/event/eventActions"
import { selectEventDataConnect } from "../redux/event/eventSelectors"

const App = ({ eventDataConnect, updateEventData }) => {
  const { enterCode } = eventDataConnect || ""
  const [previousEnterCode, setPreviousEnterCode] = useState("")

  useEffect(() => {
    if (!enterCode) return
    if (enterCode === previousEnterCode) return
    setPreviousEnterCode(enterCode)
    console.log("update")
    firestore
      .collection(`events`)
      .doc(enterCode)
      .collection("properties")
      .doc("event")
      .onSnapshot(snapshot => {
        const data = snapshot.data()
        console.log(data)
        updateEventData(data)
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
  updateEventData: data => dispatch(updateEventData(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
