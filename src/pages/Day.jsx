import React from 'react'
import { useSelector } from 'react-redux'

const Day = () => {
  const report = useSelector((state) => state.user);

  return (
    <>
      <div className="day-banner">
        <div className="day-banner-content">
          <h1>{report.fullName}</h1>
          <hr />

          <p>Here's Divine Digits Predications Based On {report.day}</p>
        </div>
      </div>
    </>
  )
}

export default Day