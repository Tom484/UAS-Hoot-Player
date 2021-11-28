import React from "react"
import Loading1 from "../../animation/loading1/Loading1"

import "./slideGamePreview.scss"

const SlideGamePreview = () => {
  return (
    <div className="slide-game-preview">
      <div className="slide-game-preview-container">
        <Loading1 />
      </div>
    </div>
  )
}

export default SlideGamePreview
