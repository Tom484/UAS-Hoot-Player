import React from "react"

import "./progressBar.scss"

const ProgressBar = ({ numberOfBars = 3, activeNumberOfBars = 1 }) => {
  const arrayBars = Array.from(Array(numberOfBars).keys())

  return (
    <div className="progress-bar">
      {arrayBars.map((bar, i) => (
        <span key={i} className={`bar ${i < activeNumberOfBars ? "active" : ""}`}></span>
      ))}
    </div>
  )
}

export default ProgressBar
