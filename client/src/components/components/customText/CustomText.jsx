import React from "react"
import "./customText.scss"

export const CustomTextLarge = ({ children, center = false, ...properties }) => {
  return (
    <div className={`custom-text-large ${center ? "text-center" : ""}`} {...properties}>
      {children}
    </div>
  )
}
export const CustomTextMedium = ({ children, center = false, ...properties }) => {
  return (
    <div className={`custom-text-medium ${center ? "text-center" : ""}`} {...properties}>
      {children}
    </div>
  )
}
export const CustomTextSmall = ({ children, center = false, ...properties }) => {
  return (
    <div className={`custom-text-small ${center ? "text-center" : ""}`} {...properties}>
      {children}
    </div>
  )
}

export const CustomTextInfoLarge = ({ children, center = false, ...properties }) => {
  return (
    <div className={`custom-text-info-large ${center ? "text-center" : ""}`} {...properties}>
      {children}
    </div>
  )
}
export const CustomTextInfoMedium = ({ children, center = false, ...properties }) => {
  return (
    <div className={`custom-text-info-medium ${center ? "text-center" : ""}`} {...properties}>
      {children}
    </div>
  )
}
export const CustomTextInfoSmall = ({ children, center = false, ...properties }) => {
  return (
    <div className={`custom-text-info-small ${center ? "text-center" : ""}`} {...properties}>
      {children}
    </div>
  )
}

export const CustomTextInfoBgLarge = ({ children, center = false, ...properties }) => {
  return (
    <div className={`custom-text-info-bg-large ${center ? "text-center" : ""}`} {...properties}>
      {children}
    </div>
  )
}
export const CustomTextInfoBgMedium = ({ children, center = false, ...properties }) => {
  return (
    <div className={`custom-text-info-bg-medium ${center ? "text-center" : ""}`} {...properties}>
      {children}
    </div>
  )
}
export const CustomTextInfoBgSmall = ({ children, center = false, ...properties }) => {
  return (
    <div className={`custom-text-info-bg-small ${center ? "text-center" : ""}`} {...properties}>
      {children}
    </div>
  )
}
