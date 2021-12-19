import React from "react"
import { withRouter } from "react-router-dom"
import EventJoinNickname from "../../event/eventJoinNickname/EventJoinNickname"
import EventJoinEnterCode from "../../event/eventJoinEnterCode/EventJoinEnterCode"
import CustomCard from "../customCard/CustomCard"
import ProgressBar from "../progressBar/ProgressBar"

import "./joinCard.scss"

const JoinCard = ({ match }) => {
  const { enterCode } = match.params

  return (
    <CustomCard>
      <div className="join-card-content">
        <div className="name">
          UAS <span className="fw-600">Hoot</span>
        </div>
        {enterCode ? <EventJoinNickname /> : <EventJoinEnterCode />}

        <div className="text-information-small">
          Welcome to this application. Enter the event code first and then enter your nickname and
          you will be ready to play.
        </div>
        <ProgressBar numberOfBars={2} activeNumberOfBars={enterCode ? 2 : 1} />
      </div>
    </CustomCard>
  )
}

export default withRouter(JoinCard)
