import React from "react"
import EventNavbar from "../../components/event/eventNavbar/EventNavbar"
import EventSlide from "../../components/event/eventSlide/EventSlide"

import "./eventPage.scss"

const EventPage = () => {
  return (
    <div className="event-page">
      <EventNavbar />
      <EventSlide />
    </div>
  )
}

export default EventPage
