import React from "react"
import { connect } from "react-redux"
import { ICONCloseSquareBold, ICONCupBold } from "../../../icons/Icons"
import { selectEventDataResults } from "../../../redux/event/eventSelectors"

import "./slideGameResults.scss"

const SlideGameResults = ({ eventDataResults }) => {
  console.log(eventDataResults)
  return (
    <div className="slide-game-results">
      <div className="slide-game-results-container">
        {eventDataResults?.score}
        {eventDataResults?.lastAnswer ? (
          <ICONCupBold className="result-icon" />
        ) : (
          <ICONCloseSquareBold className="result-icon" />
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataResults: selectEventDataResults(state),
})

export default connect(mapStateToProps)(SlideGameResults)
