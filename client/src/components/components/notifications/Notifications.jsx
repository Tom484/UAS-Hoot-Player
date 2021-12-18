import React, { useEffect, useState } from "react"
import uuid from "react-uuid"
import { ICONTrashOutline } from "../../../icons/Icons"

import "./notifications.scss"

export const NotificationTypes = {
  WARNING: "warning",
  INFORMATION: "information",
  SUCCESS: "success",
  Error: "error",
}

const Notifications = () => {
  const [notificationsArray, setNotificationsArray] = useState([
    {
      title: "Nickname length",
      content: "The minimal length of the nickname is 3 characters!!!",
      type: NotificationTypes.WARNING,
      deleteTime: new Date().getTime() + 3000,
      id: uuid(),
    },
    {
      title: "Name length",
      content: "Lorem ipsum dolor sit amet.",
      type: NotificationTypes.INFORMATION,
      deleteTime: new Date().getTime() + 5000,
      id: uuid(),
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      checkNotificationsDeleteTime(setNotificationsArray)
    }, 1000)
    return () => clearInterval(interval)
  }, [notificationsArray])

  const deleteNotification = id => {
    setNotificationsArray(notifications =>
      notifications.filter(notification => notification.id !== id)
    )
  }

  const checkNotificationsDeleteTime = setNotificationsArray => {
    setNotificationsArray(notifications =>
      notifications.filter(notification => notification.deleteTime > new Date().getTime())
    )
  }

  const addNewNotification = ({ title, content, type }) => {
    const newNotification = {
      title,
      content,
      type,
      deleteTime: new Date().getTime() + 10000,
      id: uuid(),
    }
    setNotificationsArray(notifications => [...notifications, newNotification])
  }

  useEffect(() => {
    addNewNotification({
      title: "New Notification",
      content: "ahoj what is your name",
      type: "information",
    })
  }, [])

  return (
    <div className="notifications">
      <div className="notifications-container">
        {notificationsArray.map(notification => (
          <div className="notification" key={notification.id}>
            <div className="notification-container">
              <div className="title">{notification.title}</div>
              <div className="content">{notification.content}</div>
              <ICONTrashOutline
                className="cancel"
                onClick={() => deleteNotification(notification.id)}
              />
              <div className={"type " + notification.type}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notifications
