import React from "react"
import BubbleBackground from "../bubbleBackground/BubbleBackground"
import LineBackground from "../lineBackground/LineBackground"
import LoadingCard from "../loadingCard/LoadingCard"
import RollerAnimation from "../../animation/rollerAnimation/RollerAnimation"

import "./loading.scss"

const Loading = ({ label }) => {
  return (
    <div className="loading-component">
      <LineBackground />
      <BubbleBackground />
      <div className="loading-component-container">
        <LoadingCard label={label} />
      </div>
    </div>
  )
}

export default Loading
