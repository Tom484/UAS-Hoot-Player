import React from "react"
import { randomImg } from "../../data/img"

import "./customCard.scss"

const CustomCard = ({ children }) => {
  return (
    <div className="custom-card">
      <div className="custom-card-container">
        <div className="picture-container">
          <div className="picture" style={{ backgroundImage: `url(${randomImg()})` }}></div>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  )
}

export default CustomCard
