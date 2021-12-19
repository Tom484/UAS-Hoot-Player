import React from "react"
import CustomBackground from "../customBackground/CustomBackground"
import LoadingCard from "../loadingCard/LoadingCard"

import "./loading.scss"

const Loading = ({ name }) => {
  return (
    <CustomBackground navbar>
      <LoadingCard name={name} />
    </CustomBackground>
  )
}

export default Loading
