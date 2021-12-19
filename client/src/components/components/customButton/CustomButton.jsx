import React from "react"

const CustomButton = ({ children, ...rest }) => {
  return (
    <button {...rest} className="btn-custom">
      {children}
    </button>
  )
}

export default CustomButton
