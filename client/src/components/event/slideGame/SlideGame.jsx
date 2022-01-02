import React, { useEffect, useState } from "react"
import SlideGamePreview from "../slideGamePreview/SlideGamePreview"
import SlideGameVote from "../slideGameVote/SlideGameVote"
import SlideGameResults from "../slideGameResults/SlideGameResults"
import { connect } from "react-redux"
import { selectEventDataEvent, selectEventDataProfile } from "../../../redux/event/eventSelectors"

import "./slideGame.scss"
import LoadingAnimation from "../../components/loadingAnimation/LoadingAnimation"

const SlideGame = ({ eventDataEvent, userProfile: { timeDifference } }) => {
  const { openVoteAt, closeVoteAt } = eventDataEvent

  const RENDER_SLIDE_TYPES = {
    SLIDE_GAME_PREVIEW: "SLIDE_GAME_PREVIEW",
    SLIDE_GAME_VOTE: "SLIDE_GAME_VOTE",
    SLIDE_GAME_RESULTS: "SLIDE_GAME_RESULTS",
  }

  const [renderSlide, setRenderSlide] = useState(RENDER_SLIDE_TYPES.SLIDE_GAME_PREVIEW)

  useEffect(() => {
    setRenderSlide(RENDER_SLIDE_TYPES.SLIDE_GAME_PREVIEW)
    // eslint-disable-next-line
  }, [eventDataEvent])

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderSlide(RENDER_SLIDE_TYPES.SLIDE_GAME_VOTE)
    }, openVoteAt - new Date().getTime() - timeDifference)
    return () => clearTimeout(timer)
    // eslint-disable-next-line
  }, [eventDataEvent])

  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderSlide(RENDER_SLIDE_TYPES.SLIDE_GAME_RESULTS)
    }, closeVoteAt - new Date().getTime() - timeDifference)
    return () => clearTimeout(timer)
    // eslint-disable-next-line
  }, [eventDataEvent])

  if (renderSlide === RENDER_SLIDE_TYPES.SLIDE_GAME_PREVIEW) return <SlideGamePreview />
  if (renderSlide === RENDER_SLIDE_TYPES.SLIDE_GAME_VOTE) return <SlideGameVote />
  if (renderSlide === RENDER_SLIDE_TYPES.SLIDE_GAME_RESULTS) return <SlideGameResults />
  return <LoadingAnimation />
}

const mapStateToProps = state => ({
  eventDataEvent: selectEventDataEvent(state),
  userProfile: selectEventDataProfile(state),
})

export default connect(mapStateToProps)(SlideGame)
