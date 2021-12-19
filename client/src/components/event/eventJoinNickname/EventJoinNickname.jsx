import React, { useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { joinEventStart } from "../../../redux/event/eventActions"
import { createNotification } from "../../../redux/notifications/notificationsActions"
import { NOTIFICATIONS } from "../../../redux/notifications/notificationsTypes"
import CustomButton from "../../components/customButton/CustomButton"
import { CustomInput } from "../../components/customInput/CustomInput"
import { CustomTextSmall } from "../../components/customText/CustomText"

const EventJoinNickname = ({ match, joinEvent, history, createNotification }) => {
  const { enterCode } = match.params

  const [displayName, setDisplayName] = useState("")

  const clickHandler = () => {
    if (displayName.length > 18) createNotification(NOTIFICATIONS.LONG_NICKNAME)
    if (displayName.length < 3) return createNotification(NOTIFICATIONS.SHORT_NICKNAME)

    joinEvent({ displayName, history, enterCode })
  }

  return (
    <div className="event-join">
      <div className="event-join-container">
        <CustomTextSmall>Enter your nickname</CustomTextSmall>
        <CustomInput
          type="text"
          onChange={e => setDisplayName(e.target.value)}
          maxLength={18}
          autoFocus
          center
        />
        <CustomButton onClick={clickHandler}>JOIN</CustomButton>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  joinEvent: properties => dispatch(joinEventStart(properties)),
  createNotification: notification => dispatch(createNotification(notification)),
})

export default withRouter(connect(null, mapDispatchToProps)(EventJoinNickname))
