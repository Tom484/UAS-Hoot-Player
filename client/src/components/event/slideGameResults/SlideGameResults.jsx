import React from "react"
import { connect } from "react-redux"
import { ICONCloseSquareBold, ICONCupBold } from "../../../icons/Icons"
import { selectEventDataEvent, selectEventDataResults } from "../../../redux/event/eventSelectors"
import Loading1 from "../../animation/loading1/Loading1"

import "./slideGameResults.scss"

const SlideGameResults = ({ eventDataResults, eventData }) => {
  console.log(eventData, eventDataResults)

  if (eventData?.slideIndex !== eventDataResults?.lastDataUpdateSlideIndex) {
    return (
      <div className="slide-game-results">
        <div className="slide-game-results-container">
          <Loading1 />
        </div>
      </div>
    )
  }

  return (
    <div className="slide-game-results">
      <div className="slide-game-results-container">
        {eventDataResults?.lastAnswer ? (
          <ICONCupBold className="result-icon" />
        ) : (
          <ICONCloseSquareBold className="result-icon" />
        )}
        <div className="text-container">
          <div className="gain-score">{eventDataResults?.lastScore}</div>
          {/* <div className="score">Your total score is {eventDataResults?.score}</div> */}
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
