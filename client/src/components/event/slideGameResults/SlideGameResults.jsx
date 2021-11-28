import React from "react"
import { connect } from "react-redux"
import { ICONCloseSquareBold, ICONCupBold } from "../../../icons/Icons"
import { selectEventDataResults } from "../../../redux/event/eventSelectors"

import "./slideGameResults.scss"

const SlideGameResults = ({ eventDataResults }) => {
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
})

export default connect(mapStateToProps)(SlideGameResults)
