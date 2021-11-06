import React from "react"
import { connect } from "react-redux"
import { selectEventDataEvent } from "../../../redux/event/eventSelectors"
import Lobby from "../lobby/Lobby"
import OverallResults from "../overallResults/OverallResults"

const EventSlide = ({ eventDataEvent }) => {
  const { currentSlide } = eventDataEvent

  return (
    <div>
      {currentSlide?.type === "lobby" && <Lobby />}
      {/* {currentSlide?.type === "lobby" && <Lobby />} */}
      {currentSlide?.type === "overallResults" && <OverallResults />}
    </div>
  )
}
const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
})

export default connect(mapStateToProps, null)(EventSlide)
