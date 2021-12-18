import React from "react"
import { connect } from "react-redux"
import { ICONCloseSquareBold, ICONCupBold } from "../../../icons/Icons"
import { selectEventDataEvent, selectEventDataResults } from "../../../redux/event/eventSelectors"
import BubbleBackground from "../../components/bubbleBackground/BubbleBackground"
import LineBackground from "../../components/lineBackground/LineBackground"
import Loading from "../../components/loading/Loading"

import "./slideGameResults.scss"

const SlideGameResults = ({ eventDataResults, eventData }) => {
  if (eventData?.slideIndex !== eventDataResults?.lastDataUpdateSlideIndex) {
    return <Loading label="Loading results." />
  }

  return (
    <div className="slide-game-results">
      <LineBackground />
      <BubbleBackground />
      <div className="slide-game-results-container">
        {eventDataResults?.lastAnswer ? (
          <ICONCupBold className="result-icon" />
        ) : (
          <ICONCloseSquareBold className="result-icon" />
        )}
        <div className="text-container">
          <div className="gain-score">+ {eventDataResults?.lastScore || "000"}</div>
          <div className="position-score">
            You are currently on {eventDataResults?.order || "x"} position.
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataResults: selectEventDataResults(state),
  eventData: selectEventDataEvent(state),
})

export default connect(mapStateToProps)(SlideGameResults)
