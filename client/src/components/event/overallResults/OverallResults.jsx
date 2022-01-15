import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { ICONCupBold } from "../../../icons/Icons"
import { selectEventDataResults } from "../../../redux/event/eventSelectors"
import CustomBackground from "../../components/customBackground/CustomBackground"
import CustomButton from "../../components/customButton/CustomButton"
import CustomResultCard from "../../components/customResultCard/CustomResultCard"
import { CustomTextInfoBgSmall, CustomTextLarge } from "../../components/customText/CustomText"

import "./overallResults.scss"

const OverallResults = ({ eventDataResults, history }) => {
  return (
    <CustomBackground navbar>
      <CustomResultCard>
        <ICONCupBold className="result-icon" />
        <CustomTextLarge>You finished {eventDataResults?.position || "x"}</CustomTextLarge>
        <CustomTextInfoBgSmall>
          Even if you are perfect, keep learning, practicing, training and never settle down,
          because you may not be on top tomorrow.
        </CustomTextInfoBgSmall>
        <CustomButton onClick={() => history.push("/")}>OK</CustomButton>
      </CustomResultCard>
    </CustomBackground>
  )
}

const mapStateToProps = state => ({
  eventDataResults: selectEventDataResults(state),
})

export default withRouter(connect(mapStateToProps)(OverallResults))
