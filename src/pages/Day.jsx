import React from 'react'
import { useSelector } from 'react-redux';
import data from "../assets/days.json";
import "../css/day.css";


const Day = () => {
  const report = useSelector((state) => state.user);
const day = data.find((day) => day.name === report.day);

console.log(day);
  return (
    <>
      <div className="day-banner">
        <div className="day-banner-content">
          <h1>{report.fullName}</h1>
          <hr />

          <p>Here's DivineDigits Predications Based On {report.day}</p>
        </div>
      </div>
    </>
  )
}

export default Day