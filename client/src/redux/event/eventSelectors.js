import { createSelector } from "reselect"

const selectEvent = state => state.event

export const selectEventData = createSelector([selectEvent], event => event.data)
export const selectIsEventLoading = createSelector([selectEvent], event => event.isLoading)

export const selectEventDataEvent = createSelector([selectEventData], data => data.event)
export const selectEventDataConnect = createSelector([selectEventData], data => data.connect)
export const selectEventDataProfile = createSelector([selectEventData], data => data.profile)
export const selectEventDataResults = createSelector([selectEventData], data => data.results)

export const STATUS_TYPES = {
  LOBBY: "LOBBY",
  GAME: "GAME",
  GAME_RESULTS: "GAME_RESULTS",
  OVERALL_RESULTS: "OVERALL_RESULTS",
}

export const SLIDE_TYPES = {
  QUIZ: "quiz",
}
