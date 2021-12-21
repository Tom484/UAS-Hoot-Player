import React, { useState } from "react"
import { connect } from "react-redux"
import { ICONCloudBold, ICONDropBold, ICONFlashBold, ICONMoonBold } from "../../../icons/Icons"
import { voteEventStart } from "../../../redux/event/eventActions"
import LoadingCardBackground from "../../components/loadingCardBackground/LoadingCardBackground"

import "./slideGameVote.scss"

const SlideGameVote = ({ voteEvent }) => {
  const [voted, setVoted] = useState(false)

  const vote = option => {
    voteEvent({ option, submitTime: new Date().getTime() })
    setVoted(true)
  }

  if (voted) {
    return <LoadingCardBackground navbar name="Wait a moment for the other players." />
  }

  return (
    <div className="slide-game-vote">
      <div className="slide-game-vote-container">
        <button className="btn-vote vote-1" onClick={() => vote(0)}>
          <ICONFlashBold className="icon-vote" />
        </button>
        <button className="btn-vote vote-2" onClick={() => vote(1)}>
          <ICONCloudBold className="icon-vote" />
        </button>
        <button className="btn-vote vote-3" onClick={() => vote(2)}>
          <ICONDropBold className="icon-vote" />
        </button>
        <button className="btn-vote vote-4" onClick={() => vote(3)}>
          <ICONMoonBold className="icon-vote" />
        </button>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  voteEvent: data => dispatch(voteEventStart(data)),
})

export default connect(null, mapDispatchToProps)(SlideGameVote)
