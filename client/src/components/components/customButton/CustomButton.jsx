import React from "react"

const CustomButton = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={`btn-custom ${className}`}>
      {children}
    </button>
  )
}

export default CustomButton
