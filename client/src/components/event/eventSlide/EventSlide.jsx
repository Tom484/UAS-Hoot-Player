import React from "react"
import { connect } from "react-redux"
import Lobby from "../lobby/Lobby"
import SlideGame from "../slideGame/SlideGame"
import OverallResults from "../overallResults/OverallResults"
import { selectEventDataEvent, STATUS_TYPES } from "../../../redux/event/eventSelectors"

const EventSlide = ({ eventDataEvent }) => {
  const { status } = eventDataEvent
  return (
    <div>
      {status === STATUS_TYPES.LOBBY && <Lobby />}
      {status === STATUS_TYPES.GAME && <SlideGame />}
      {status === STATUS_TYPES.OVERALL_RESULTS && <OverallResults />}
    </div>
  )
}
const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
})

export default connect(mapStateToProps)(EventSlide)
