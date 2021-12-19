import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { ICONCupBold } from "../../../icons/Icons"
import { selectEventDataResults } from "../../../redux/event/eventSelectors"
import BubbleBackground from "../../components/bubbleBackground/BubbleBackground"
import CustomResultCard from "../../components/customResultCard/CustomResultCard"
import LineBackground from "../../components/lineBackground/LineBackground"

import "./overallResults.scss"

const OverallResults = ({ eventDataResults, history }) => {
  return (
    <div className="overall-results">
      <BubbleBackground />
      <LineBackground />
      <div className="overall-results-container">
        <CustomResultCard>
          <ICONCupBold className="result-icon" />
          <div className="position">You finished {eventDataResults?.order || "x"}</div>
          <div className="text-information-small-background">
            Even if you are perfect, keep learning, practicing, training and never settle down,
            because you may not be on top tomorrow.
          </div>
          <button className="btn btn-custom" onClick={() => history.push("/")}>
            OK
          </button>
        </CustomResultCard>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataResults: selectEventDataResults(state),
})

export default withRouter(connect(mapStateToProps)(OverallResults))
