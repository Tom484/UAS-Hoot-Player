import React from "react"
import { connect } from "react-redux"
import { selectEventDataEvent, STATUS_TYPES } from "../../../redux/event/eventSelectors"
import Lobby from "../lobby/Lobby"
import SlideGame from "../slideGame/SlideGame"
import OverallResults from "../overallResults/OverallResults"

const EventSlide = ({ eventDataEvent }) => {
  const { status } = eventDataEvent

  return (
    <div>
      {status === STATUS_TYPES.LOBBY && <Lobby />}
      {status === STATUS_TYPES.GAME && <SlideGame />}
      {status === STATUS_TYPES.GAME_RESULTS && <SlideGame />}
      {status === STATUS_TYPES.OVERALL_RESULTS && <OverallResults />}
    </div>
  )
}
const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
})

export default connect(mapStateToProps, null)(EventSlide)
