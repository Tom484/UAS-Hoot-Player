import "./customInput.scss"

export const CustomInput = ({ center, className, ...properties }) => {
  return (
    <input className={`custom-input ${center ? "text-center" : ""} ${className}`} {...properties} />
  )
}
