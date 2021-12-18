import React, { useEffect } from "react"
import { connect } from "react-redux"
import { ICONTrashOutline } from "../../../icons/Icons"
import { deleteNotification } from "../../../redux/notifications/notificationsActions"
import { selectNotifications } from "../../../redux/notifications/notificationsSelectors"

import "./notifications.scss"

const Notifications = ({ notifications, deleteNotification }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      checkNotificationsDeleteTime()
    }, 1000)
    return () => clearInterval(interval)
    // eslint-disable-next-line
  }, [notifications])

  const checkNotificationsDeleteTime = () => {
    notifications.forEach(notification => {
      if (notification.deleteTime < new Date().getTime()) {
        deleteNotification(notification.id)
      }
    })
  }

  return (
    <div className="notifications">
      <div className="notifications-container">
        {notifications.map(notification => (
          <div className="notification" key={notification.id}>
            <div className="notification-container">
              <div className="title">{notification.title}</div>
              <div className="message">{notification.message}</div>
              <ICONTrashOutline
                className="cancel"
                onClick={() => deleteNotification(notification.id)}
              />
              <div className={"type " + notification.type}></div>
              <div className="btn-cancel" onClick={() => deleteNotification(notification.id)}>
                OK
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  notifications: selectNotifications(state),
})

const mapDispatchToProps = dispatch => ({
  deleteNotification: id => dispatch(deleteNotification(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
