import React from "react"
import { withRouter } from "react-router-dom"
import EventJoinNickname from "../../event/eventJoinNickname/EventJoinNickname"
import EventJoinEnterCode from "../../event/eventJoinEnterCode/EventJoinEnterCode"

import "./joinCard.scss"

const JoinCard = ({ match }) => {
  const { enterCode } = match.params

  return (
    <div className="join-card">
      <div className="join-card-container">
        <div
          className="picture"
          style={{ backgroundImage: `url("./img/connect-page-background.svg")` }}
        ></div>
        <div className="content">
          <div className="name">
            UAS <span className="fw-600">Hoot</span>
          </div>
          {enterCode ? <EventJoinNickname /> : <EventJoinEnterCode />}
          <div className="information">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero autem, voluptate iusto
            repellendus itaque porro dicta.
          </div>
          <div className="progress-bar">
            <div className="bar active"></div>
            <div className={`bar ${enterCode ? "active" : ""}`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(JoinCard)
