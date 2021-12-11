import React from "react"
import Loading from "../../components/loading/Loading"

import "./slideGamePreview.scss"

const SlideGamePreview = () => {
  return (
    <div className="slide-game-preview">
      <div className="slide-game-preview-container">
        <Loading label="Read the question and you can vote in a moment.." />
      </div>
    </div>
  )
}

export default SlideGamePreview
