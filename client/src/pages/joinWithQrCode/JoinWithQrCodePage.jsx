import React from "react"
import { withRouter } from "react-router-dom"

const JoinWithQrCodePage = ({ match }) => {
  console.log(match)
  const { enterCode } = match.params || ""
  return <div>Join With Qr Code Page {enterCode}</div>
}

export default withRouter(JoinWithQrCodePage)
