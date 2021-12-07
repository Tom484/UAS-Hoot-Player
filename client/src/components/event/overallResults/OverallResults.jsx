import React from "react"
import BubbleBackground from "../../components/bubbleBackground/BubbleBackground"
import LineBackground from "../../components/lineBackground/LineBackground"

import "./overallResults.scss"

const OverallResults = () => {
  return (
    <div className="overall-results">
      <BubbleBackground />
      <LineBackground />
      <div className="overall-results-container"></div>
    </div>
  )
}

export default OverallResults
