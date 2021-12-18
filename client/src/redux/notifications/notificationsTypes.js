export const NotificationActionTypes = {
  CREATE_NOTIFICATION: "CREATE_NOTIFICATION",
  DELETE_NOTIFICATION: "DELETE_NOTIFICATION",
}

export const NOTIFICATION_TYPES = {
  WARNING: "warning",
  INFORMATION: "information",
  SUCCESS: "success",
  Error: "error",
}

export const NOTIFICATIONS = {
  EVENT_NOT_EXIST: {
    title: "The event does not exist",
    message: "You may have entered the wrong event code. Please try again.",
    type: NOTIFICATION_TYPES.WARNING,
  },
  EVENT_IS_CLOSED: {
    title: "The event was closed",
    message: "This event has been closed, please ask your administrator to open the event.",
    type: NOTIFICATION_TYPES.WARNING,
  },
}
