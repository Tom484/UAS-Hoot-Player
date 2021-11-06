import React from "react"
import { withRouter } from "react-router-dom"

const EventJoinNickname = ({ match }) => {
  const { enterCode } = match.params

  return <div>Event Join Nickname {enterCode}</div>
}

export default withRouter(EventJoinNickname)
