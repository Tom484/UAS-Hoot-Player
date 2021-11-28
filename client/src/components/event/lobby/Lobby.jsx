import React from "react"
import Loading1 from "../../animation/loading1/Loading1"

import "./lobby.scss"
const Lobby = () => {
  return (
    <div className="lobby">
      <div className="lobby-container">
        <Loading1 />
        {/* <h2 className="label">Wait for the event to start..</h2> */}
      </div>
    </div>
  )
}

export default Lobby
