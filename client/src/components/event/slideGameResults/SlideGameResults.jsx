import React from "react"
import { connect } from "react-redux"
import { ICONCloseSquareBold, ICONCupBold } from "../../../icons/Icons"
import { selectEventDataEvent, selectEventDataResults } from "../../../redux/event/eventSelectors"
import BubbleBackground from "../../components/bubbleBackground/BubbleBackground"
import CustomResultCard from "../../components/customResultCard/CustomResultCard"
import LineBackground from "../../components/lineBackground/LineBackground"
import LoadingAnimation from "../../components/loadingAnimation/LoadingAnimation"

import "./slideGameResults.scss"

const SlideGameResults = ({ eventDataResults, eventData }) => {
  if (eventData?.slideIndex !== eventDataResults?.lastDataUpdateSlideIndex) {
    return <LoadingAnimation />
  }

  return (
    <div className="slide-game-results">
      <LineBackground />
      <BubbleBackground />
      <div className="slide-game-results-container">
        <CustomResultCard>
          {eventDataResults?.lastAnswer ? (
            <ICONCupBold className="result-icon" />
          ) : (
            <ICONCloseSquareBold className="result-icon" />
          )}

          <div className="text-large text-center">
            {eventDataResults?.lastAnswer ? "Correct" : "Wrong"}{" "}
            {eventDataResults?.lastScore || "0"} points
          </div>

          <div className="text-information-medium-background">
            You are currently on {eventDataResults?.order || "x"} position. Keep going, keep going.
          </div>
        </CustomResultCard>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataResults: selectEventDataResults(state),
  eventData: selectEventDataEvent(state),
})

export default connect(mapStateToProps)(SlideGameResults)
