import React from "react"
import { connect } from "react-redux"
import { selectIsEventLoading } from "../../../redux/event/eventSelectors"
import RollerAnimation from "../../animation/rollerAnimation/RollerAnimation"

import "./loadingAnimation.scss"

const LoadingAnimation = ({ isEventLoading }) => {
  console.log(isEventLoading)

  if (!isEventLoading) return <></>

  return (
    <div className="loading-animation">
      <div className="loading-animation-container">
        <div className="loading-card">
          <RollerAnimation />
          <div className="">Please wait</div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isEventLoading: selectIsEventLoading(state),
})

export default connect(mapStateToProps)(LoadingAnimation)
