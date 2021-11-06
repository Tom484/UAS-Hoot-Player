import React, { useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { joinEventStart } from "../../../redux/event/eventActions"

const EventJoinNickname = ({ match, joinEvent, history }) => {
  const { enterCode } = match.params

  const [displayName, setDisplayName] = useState("")

  const clickHandler = () => {
    joinEvent({ displayName, history, enterCode })
  }

  return (
    <div>
      Enter Your Nickname
      <input type="text" onChange={e => setDisplayName(e.target.value)} />
      <button onClick={clickHandler}>Join</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  joinEvent: properties => dispatch(joinEventStart(properties)),
})

export default withRouter(connect(null, mapDispatchToProps)(EventJoinNickname))
