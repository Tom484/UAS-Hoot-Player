import React from "react"
import { withRouter } from "react-router-dom"
import BubbleBackground from "../../components/components/bubbleBackground/BubbleBackground"
import CustomCard from "../../components/components/customCard/CustomCard"
import LineBackground from "../../components/components/lineBackground/LineBackground"

import "./notFoundPage.scss"

const NotFoundPage = ({ history }) => {
  return (
    <div className="not-found-page">
      <BubbleBackground />
      <LineBackground />
      <div className="not-found-page-container">
        <CustomCard>
          <div className="not-found-page-content">
            <div className="name">Page was not found!</div>
            <div className="text-information-small">
              This page was not found. One reason is that the event may have been canceled or
              completed. Or there are some problems connecting to the server.
            </div>
            <div onClick={() => history.push("/")} className="btn btn-custom">
              HOME
            </div>
          </div>
        </CustomCard>
      </div>
    </div>
  )
}

export default withRouter(NotFoundPage)
