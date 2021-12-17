import React from "react"
import SquareAnimation from "../../animation/squareAnimation/SquareAnimation"
import BubbleBackground from "../bubbleBackground/BubbleBackground"
import LineBackground from "../lineBackground/LineBackground"

import "./loading.scss"

const Loading = ({ label }) => {
  return (
    <div className="loading-component">
      <LineBackground />
      <BubbleBackground />
      <SquareAnimation />
      <p className="loading-label">{label}</p>
    </div>
  )
}

export default Loading
