import React from "react"
import img from "../../../img/img-2.svg"
import DotsAnimation from "../../animation/dotsAnimation/DotsAnimation"

import "./loadingCard.scss"

const LoadingCard = ({ label }) => {
  return (
    <div className="loading-card">
      <div className="loading-card-container">
        <div className="picture" style={{ backgroundImage: `url(${img})` }}></div>
        <div className="content">
          <div className="name">{label}</div>
          <div className="question">Did you know?</div>
          <div className="facts-container">
            <div className="fact">
              The world’s oldest wooden wheel has been around for more than 5,000 years.
            </div>
            <div className="fact">Sudan has more pyramids than any country in the world.</div>
          </div>
          <DotsAnimation />
        </div>
      </div>
    </div>
  )
}

export default LoadingCard
