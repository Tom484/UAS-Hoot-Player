import React from "react"
import { connect } from "react-redux"
import { ICONCloseSquareBold, ICONCupBold } from "../../../icons/Icons"
import { selectEventDataEvent, selectEventDataResults } from "../../../redux/event/eventSelectors"
import CustomBackground from "../../components/customBackground/CustomBackground"
import CustomLoadingAnimation from "../../components/customLoadingAnimation/CustomLoadingAnimation"
import CustomResultCard from "../../components/customResultCard/CustomResultCard"
import { CustomTextInfoBgMedium, CustomTextLarge } from "../../components/customText/CustomText"
import "./slideGameResults.scss"

const SlideGameResults = ({ eventDataResults, eventData }) => {
  if (eventData?.slideIndex !== eventDataResults?.lastDataUpdateSlideIndex) {
    return <CustomLoadingAnimation />
  }

  return (
    <CustomBackground>
      <CustomResultCard>
        {eventDataResults?.lastAnswer ? (
          <ICONCupBold className="result-icon" />
        ) : (
          <ICONCloseSquareBold className="result-icon" />
        )}
        <CustomTextLarge>
          {eventDataResults?.lastAnswer ? "Correct" : "Wrong"} {eventDataResults?.lastScore || "0"}{" "}
          points
        </CustomTextLarge>
        <CustomTextInfoBgMedium center>
          You are currently on {eventDataResults?.order || "x"} position. Keep going, keep going.
        </CustomTextInfoBgMedium>
      </CustomResultCard>
    </CustomBackground>
  )
}

const mapStateToProps = state => ({
  eventDataResults: selectEventDataResults(state),
  eventData: selectEventDataEvent(state),
})

export default connect(mapStateToProps)(SlideGameResults)
