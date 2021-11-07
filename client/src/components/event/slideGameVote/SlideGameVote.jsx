import React from "react"
import { connect } from "react-redux"
import { voteEventStart } from "../../../redux/event/eventActions"

import "./slideGameVote.scss"

const SlideGameVote = ({ voteEvent }) => {
  return (
    <div>
      <button onClick={() => voteEvent({ option: 0, submitTime: new Date().getTime() })}>1</button>
      <button onClick={() => voteEvent({ option: 1, submitTime: new Date().getTime() })}>2</button>
      <button onClick={() => voteEvent({ option: 2, submitTime: new Date().getTime() })}>3</button>
      <button onClick={() => voteEvent({ option: 3, submitTime: new Date().getTime() })}>4</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  voteEvent: data => dispatch(voteEventStart(data)),
})

export default connect(null, mapDispatchToProps)(SlideGameVote)
