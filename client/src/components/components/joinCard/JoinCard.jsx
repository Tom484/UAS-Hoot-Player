import React from "react"
import { withRouter } from "react-router-dom"
import EventJoinNickname from "../../event/eventJoinNickname/EventJoinNickname"
import EventJoinEnterCode from "../../event/eventJoinEnterCode/EventJoinEnterCode"
import CustomCard from "../customCard/CustomCard"
import ProgressBar from "../progressBar/ProgressBar"
import { CustomTextInfoSmall, CustomTextLarge } from "../customText/CustomText"

import "./joinCard.scss"

const JoinCard = ({ match }) => {
  const { enterCode } = match.params

  return (
    <CustomCard className="join-card-content">
      <CustomTextLarge style={{ marginBottom: "30px" }}>
        <span className="fw-400">UAS</span> Hoot
      </CustomTextLarge>
      {enterCode ? <EventJoinNickname /> : <EventJoinEnterCode />}
      <CustomTextInfoSmall>
        Welcome to this application. Enter the event code first and then enter your nickname and you
        will be ready to play.
      </CustomTextInfoSmall>
      <ProgressBar numberOfBars={2} activeNumberOfBars={enterCode ? 2 : 1} />
    </CustomCard>
  )
}

export default withRouter(JoinCard)
