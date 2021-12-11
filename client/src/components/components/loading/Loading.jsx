import React from "react"
import Loading1 from "../../animation/loading1/Loading1"
import BubbleBackground from "../bubbleBackground/BubbleBackground"
import LineBackground from "../lineBackground/LineBackground"

import "./loading.scss"

const Loading = ({ label }) => {
  return (
    <div className="loading-component">
      <LineBackground />
      <BubbleBackground />
      <Loading1 />
      <p className="loading-label">{label}</p>
    </div>
  )
}

export default Loading
