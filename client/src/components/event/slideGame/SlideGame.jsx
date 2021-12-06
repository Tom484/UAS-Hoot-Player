import React, { useEffect, useState } from "react"
import SlideGamePreview from "../slideGamePreview/SlideGamePreview"
import SlideGameVote from "../slideGameVote/SlideGameVote"
import SlideGameResults from "../slideGameResults/SlideGameResults"
import { connect } from "react-redux"
import { selectEventDataEvent } from "../../../redux/event/eventSelectors"

import "./slideGame.scss"

const SlideGame = ({ eventDataEvent }) => {
  const { openVoteAt, closeVoteAt } = eventDataEvent

  const [time, setTime] = useState(Date.now())
  const [timeInterval, setTimeInterval] = useState("")

  useEffect(() => {
    setTimeInterval(setInterval(() => setTime(Date.now()), 10))
    return () => {
      clearInterval(timeInterval)
    }
    // eslint-disable-next-line
  }, [])

  if (new Date().getTime() > closeVoteAt) {
    clearInterval(timeInterval)
  }

  return (
    <div>
      {time < openVoteAt && <SlideGamePreview />}
      {time >= openVoteAt && time < closeVoteAt && <SlideGameVote />}
      {time >= closeVoteAt && <SlideGameResults />}
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
})

export default connect(mapStateToProps)(SlideGame)
