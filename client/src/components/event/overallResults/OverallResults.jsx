import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { ICONCupBold } from "../../../icons/Icons"
import { selectEventDataResults } from "../../../redux/event/eventSelectors"
import BubbleBackground from "../../components/bubbleBackground/BubbleBackground"
import LineBackground from "../../components/lineBackground/LineBackground"

import "./overallResults.scss"

const OverallResults = ({ eventDataResults, history }) => {
  return (
    <div className="overall-results">
      <BubbleBackground />
      <LineBackground />
      <div className="overall-results-container">
        <div className="results-card">
          <div className="results-card-container">
            <ICONCupBold className="result-icon" />
            <div className="position">You finished {eventDataResults?.order || "x"}</div>
            <div className="quote">
              Even if you are perfect, keep learning, practicing, training and never settle down,
              because you may not be on top tomorrow.
            </div>
            <button className="btn btn-end" onClick={() => history.push("")}>
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataResults: selectEventDataResults(state),
})

export default withRouter(connect(mapStateToProps)(OverallResults))
