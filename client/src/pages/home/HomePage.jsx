import React from "react"
import { withRouter } from "react-router-dom"
import EventJoinEventId from "../../components/event/eventJoinEnterCode/EventJoinEnterCode"
import EventJoinNickname from "../../components/event/eventJoinNickname/EventJoinNickname"

import "./homePage.scss"

const HomePage = ({ match }) => {
  const { enterCode } = match.params
  return (
    <div>
      <h1>Welcome to USA Hoot</h1>
      {enterCode ? <EventJoinNickname /> : <EventJoinEventId />}
    </div>
  )
}

export default withRouter(HomePage)
