import { deleteReference } from "../../functions/redux/reduxFunctions"

export const updateDataEvent = (previousData, data) => {
  return deleteReference({ ...previousData, event: { ...data } })
}
export const updateResultsEvent = (previousData, data) => {
  return deleteReference({ ...previousData, results: { ...data } })
}
