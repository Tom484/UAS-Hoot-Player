import React, { useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { existEventStart } from "../../../redux/event/eventActions"

const EventJoinEventId = ({ existEvent, history }) => {
  const [enterCode, setEnterCode] = useState("")

  const clickHandler = () => {
    existEvent({ enterCode, history })
  }

  return (
    <div>
      Enter Join Code
      <input type="number" onChange={e => setEnterCode(e.target.value)} />
      <button onClick={clickHandler}>Join</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  existEvent: properties => dispatch(existEventStart(properties)),
})

export default withRouter(connect(null, mapDispatchToProps)(EventJoinEventId))
