export const createNotificationUtils = (state, newNotification) => {
  return [...state.notifications, newNotification]
}

export const deleteNotificationUtils = (state, id) => {
  return state.notifications.filter(notification => notification.id !== id)
}
