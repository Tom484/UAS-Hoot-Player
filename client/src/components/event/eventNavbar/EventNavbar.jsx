import React from "react"
import { connect } from "react-redux"
import { selectEventDataProfile, selectEventDataResults } from "../../../redux/event/eventSelectors"

import "./eventNavbar.scss"

const EventNavbar = ({ eventDataResults, eventDataProfile }) => {
  return (
    <div className="event-navbar">
      <div className="event-navbar-container">
        <span className="score box">Score: {eventDataResults?.score | 0}</span>
        <span className="name box">{eventDataProfile?.displayName}</span>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataResults: selectEventDataResults(state),
  eventDataProfile: selectEventDataProfile(state),
})

export default connect(mapStateToProps)(EventNavbar)
