import { deleteReference } from "../../functions/redux/reduxFunctions"

export const updateData = (previousData, data) => {
  return deleteReference({ ...previousData, ...data })
}
