import React from "react"
import Loading from "../../components/loading/Loading"

import "./lobby.scss"

const Lobby = () => {
  return (
    <div className="lobby">
      <div className="lobby-container">
        <Loading label="Wait for the event to start..." />
      </div>
    </div>
  )
}

export default Lobby
