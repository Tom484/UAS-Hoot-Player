import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import EventPage from "../pages/event/EventPage"
import HomePage from "../pages/home/HomePage"
import NotFoundPage from "../pages/notFound/NotFoundPage"
import JoinWithQrCodePage from "../pages/joinWithQrCode/JoinWithQrCodePage"

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/event" component={EventPage} />
        <Route exact path="/qr-join/:enterCode" component={JoinWithQrCodePage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/not-found" component={NotFoundPage} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  )
}

export default App
