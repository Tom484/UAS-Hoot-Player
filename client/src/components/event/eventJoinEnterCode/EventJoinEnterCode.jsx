import React, { useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { existEventStart } from "../../../redux/event/eventActions"

import "./eventJoinEnterCode.scss"

const EventJoinEventId = ({ existEvent, history }) => {
  const [enterCode, setEnterCode] = useState("")
  const clickHandler = () => {
    existEvent({ enterCode, history })
  }

  return (
    <div className="event-join">
      <div className="event-join-container">
        <div className="label">Enter Join Code</div>
        <input
          className="input-custom input"
          type="number"
          autoFocus
          onChange={e => setEnterCode(e.target.value)}
        />
        <button className="btn-custom btn" onClick={clickHandler}>
          Join
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  existEvent: properties => dispatch(existEventStart(properties)),
})

export default withRouter(connect(null, mapDispatchToProps)(EventJoinEventId))
