import React from "react"
import { withRouter } from "react-router-dom"
import CustomBackground from "../../components/components/customBackground/CustomBackground"
import CustomButton from "../../components/components/customButton/CustomButton"
import CustomCard from "../../components/components/customCard/CustomCard"
import {
  CustomTextInfoBgMedium,
  CustomTextLarge,
} from "../../components/components/customText/CustomText"

import "./notFoundPage.scss"

const NotFoundPage = ({ history }) => {
  return (
    <CustomBackground>
      <CustomCard>
        <CustomTextLarge center>Page was not found!</CustomTextLarge>
        <CustomTextInfoBgMedium>
          This page was not found. One reason is that the event may have been canceled or completed.
          Or there are some problems connecting to the server.
        </CustomTextInfoBgMedium>
        <CustomButton onClick={() => history.push("/")}>HOME</CustomButton>
      </CustomCard>
    </CustomBackground>
  )
}

export default withRouter(NotFoundPage)
