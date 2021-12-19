import React from "react"

import "./customResultCard.scss"

const CustomResultCard = ({ children }) => {
  return (
    <div className="custom-result-card">
      <div className="custom-result-card-container">{children}</div>
    </div>
  )
}

export default CustomResultCard
