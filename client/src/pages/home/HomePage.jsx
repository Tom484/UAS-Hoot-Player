import React from "react"
import JoinCard from "../../components/components/joinCard/JoinCard"
import LineBackground from "../../components/components/lineBackground/LineBackground"

import "./homePage.scss"
import BubbleBackground from "../../components/components/bubbleBackground/BubbleBackground"

const HomePage = () => {
  return (
    <div className="home-page">
      <LineBackground />
      <BubbleBackground />
      <div className="home-page-container">
        <JoinCard />
      </div>
    </div>
  )
}

export default HomePage
