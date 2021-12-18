import React from "react"
import DotsAnimation from "../../animation/dotsAnimation/DotsAnimation"
import { getRandomFacts } from "../../data/facts"
import CustomCard from "../customCard/CustomCard"

import "./loadingCard.scss"

const LoadingCard = ({ label }) => {
  const facts = getRandomFacts(2)

  return (
    <CustomCard>
      <div className="loading-card-content">
        <div className="name">{label}</div>
        <div className="question">Did you know?</div>
        <div className="facts-container">
          <div className="fact">{facts[0]}</div>
          <div className="fact">{facts[1]}</div>
        </div>
        <DotsAnimation />
      </div>
    </CustomCard>
  )
}

export default LoadingCard
