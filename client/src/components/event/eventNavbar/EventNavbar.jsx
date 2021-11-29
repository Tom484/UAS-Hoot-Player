import React from "react"
import { connect } from "react-redux"
import { selectEventDataProfile, selectEventDataResults } from "../../../redux/event/eventSelectors"

import "./eventNavbar.scss"

const EventNavbar = ({ eventDataResults, eventDataProfile }) => {
  console.log(eventDataResults)
  console.log(eventDataProfile)
  return (
    <div className="event-navbar">
      <div className="event-navbar-container">
        <span className="name">{eventDataProfile?.displayName}</span>
        <span className="score">{eventDataResults?.score | 0}</span>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataResults: selectEventDataResults(state),
  eventDataProfile: selectEventDataProfile(state),
})

export default connect(mapStateToProps)(EventNavbar)
