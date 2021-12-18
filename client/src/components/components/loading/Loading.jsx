import React from "react"
import BubbleBackground from "../bubbleBackground/BubbleBackground"
import LineBackground from "../lineBackground/LineBackground"

import "./loading.scss"

const Loading = ({ label }) => {
  return (
    <div className="loading-component">
      {/* <SquareAnimation /> */}
      {/* <p className="loading-label">{label}</p> */}
      <LineBackground />
      <BubbleBackground />
      <div className="loading-component-container">Lore</div>
    </div>
  )
}

export default Loading
