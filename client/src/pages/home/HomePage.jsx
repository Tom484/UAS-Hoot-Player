import React from "react"
import { withRouter } from "react-router-dom"
import BubbleBackground from "../../components/bubbleBackground/BubbleBackground"
import EventJoinEventId from "../../components/event/eventJoinEnterCode/EventJoinEnterCode"
import EventJoinNickname from "../../components/event/eventJoinNickname/EventJoinNickname"
import LineBackground from "../../components/lineBackground/LineBackground"

import "./homePage.scss"

const HomePage = ({ match }) => {
  const { enterCode } = match.params
  return (
    <div className="home-page">
      <LineBackground />
      <BubbleBackground />
      <div className="home-page-container">
        {/* <h1>Welcome to USA Hoot</h1> */}
        {enterCode ? <EventJoinNickname /> : <EventJoinEventId />}
      </div>
    </div>
  )
}

export default withRouter(HomePage)
