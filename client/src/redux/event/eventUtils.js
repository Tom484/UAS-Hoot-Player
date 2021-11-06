import { deleteReference } from "../../functions/redux/reduxFunctions"

export const updateDataEvent = (previousData, data) => {
  return deleteReference({ ...previousData, event: { ...data } })
}
