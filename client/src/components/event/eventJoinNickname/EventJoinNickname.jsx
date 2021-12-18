import React, { useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { joinEventStart } from "../../../redux/event/eventActions"
import { createNotification } from "../../../redux/notifications/notificationsActions"

const EventJoinNickname = ({ match, joinEvent, history, createNotification }) => {
  const { enterCode } = match.params

  const [displayName, setDisplayName] = useState("")

  const clickHandler = () => {
    if (displayName.length > 20)
      createNotification({
        title: "Name length",
        message: "The maximum length of the nickname is 18 characters!!!",
        type: "warning",
      })

    if (displayName.length < 3)
      return createNotification({
        title: "Name length",
        message: "The minimal length of the nickname is 3 characters!!!",
        type: "warning",
      })
    joinEvent({ displayName, history, enterCode })
  }

  return (
    <div className="event-join">
      <div className="event-join-container">
        <div className="label">Enter your nickname</div>
        <input
          className="input-join"
          type="text"
          onChange={e => setDisplayName(e.target.value)}
          maxLength={18}
          autoFocus
        />
        <button className="btn-join" onClick={clickHandler}>
          Join
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  joinEvent: properties => dispatch(joinEventStart(properties)),
  createNotification: notification => dispatch(createNotification(notification)),
})

export default withRouter(connect(null, mapDispatchToProps)(EventJoinNickname))
