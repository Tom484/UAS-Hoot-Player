export const eventDataSkeleton = ({ enterCode, playerId, displayName }) => {
  return {
    event: {},
    connect: {
      enterCode: enterCode,
    },
    profile: {
      id: playerId,
      displayName,
    },
  }
}

export const eventPlayerSkeleton = ({ playerId, displayName, timeDifference }) => {
  return {
    id: playerId,
    displayName,
    joinAt: new Date().getTime(),
    score: 0,
    lastScore: 0,
    lastAnswer: false,
    lastDataUpdateSlideIndex: -1,
    consecutiveCorrectAnswers: 0,
    timeDifference,
  }
}
