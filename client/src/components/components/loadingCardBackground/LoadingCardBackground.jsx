import React from "react"
import CustomBackground from "../customBackground/CustomBackground"
import LoadingCard from "../loadingCard/LoadingCard"

import "./loading.scss"

const LoadingCardBackground = ({ name, navbar = false }) => {
  return (
    <CustomBackground navbar={navbar}>
      <LoadingCard name={name} />
    </CustomBackground>
  )
}

export default LoadingCardBackground
