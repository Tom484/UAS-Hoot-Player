import React from "react"
import { withRouter } from "react-router-dom"
import BubbleBackground from "../../components/bubbleBackground/BubbleBackground"
import EventJoinEventId from "../../components/event/eventJoinEnterCode/EventJoinEnterCode"
import EventJoinNickname from "../../components/event/eventJoinNickname/EventJoinNickname"
import LineBackground from "../../components/lineBackground/LineBackground"
import { ICONLogoOutline } from "../../icons/Icons"

import "./homePage.scss"

const HomePage = ({ match }) => {
  const { enterCode } = match.params
  return (
    <div className="home-page">
      <LineBackground />
      <BubbleBackground />
      <div className="home-page-container">
        <div className="title-container">
          <ICONLogoOutline className="app-icon" />
          <div className="name">
            UAS <span className="fw-600">Hoot</span>
          </div>
        </div>
        {enterCode ? <EventJoinNickname /> : <EventJoinEventId />}
      </div>
    </div>
  )
}

export default withRouter(HomePage)
