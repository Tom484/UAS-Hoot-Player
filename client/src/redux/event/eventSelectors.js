import { createSelector } from "reselect"

const selectEvent = state => state.event

export const selectEventData = createSelector([selectEvent], event => event.data)

export const selectEventDataEvent = createSelector([selectEventData], data => data.event)
export const selectEventDataConnect = createSelector([selectEventData], data => data.connect)
export const selectEventDataProfile = createSelector([selectEventData], data => data.profile)
