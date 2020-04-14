import React from "react"
import { Helmet } from "react-helmet"

function Calendar() {
  return (
    <>
      <Helmet>
        <title>Calendar</title>
      </Helmet>
      <div className="calendar-container">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=office%40gracelongbeach.com&ctz=America/Chicago"
          title="Grace Lutheran Church Calendar"
          style={{ border: 0 }}
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </>
  )
}

export default Calendar
