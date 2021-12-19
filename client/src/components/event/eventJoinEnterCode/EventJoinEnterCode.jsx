import React, { useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { existEventStart } from "../../../redux/event/eventActions"
import CustomButton from "../../components/customButton/CustomButton"
import { CustomInput } from "../../components/customInput/CustomInput"
import { CustomTextSmall } from "../../components/customText/CustomText"

import "./eventJoinEnterCode.scss"

const EventJoinEventId = ({ existEvent, history }) => {
  const [enterCode, setEnterCode] = useState("")
  const clickHandler = () => {
    existEvent({ enterCode, history })
  }

  return (
    <div className="event-join">
      <div className="event-join-container">
        <CustomTextSmall>Enter Join Code</CustomTextSmall>
        <CustomInput center type="number" autoFocus onChange={e => setEnterCode(e.target.value)} />
        <CustomButton onClick={clickHandler}>ENTER</CustomButton>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  existEvent: properties => dispatch(existEventStart(properties)),
})

export default withRouter(connect(null, mapDispatchToProps)(EventJoinEventId))
