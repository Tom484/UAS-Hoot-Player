import React from "react"
import { connect } from "react-redux"
import Lobby from "../lobby/Lobby"
import SlideGame from "../slideGame/SlideGame"
import OverallResults from "../overallResults/OverallResults"
import { selectEventDataEvent, STATUS_TYPES } from "../../../redux/event/eventSelectors"

const EventSlide = ({ eventDataEvent }) => {
  const { status } = eventDataEvent

  if (status === STATUS_TYPES.LOBBY) return <Lobby />
  if (status === STATUS_TYPES.GAME) return <SlideGame />
  if (status === STATUS_TYPES.OVERALL_RESULTS) return <OverallResults />
}
const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
})

export default connect(mapStateToProps)(EventSlide)
