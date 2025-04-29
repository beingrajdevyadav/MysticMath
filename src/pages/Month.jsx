import React from 'react'
import data from '../assets/months.json'
import { useSelector } from 'react-redux'
const Month = () => {
  const user = useSelector((state)=>state.user);

const report = data.find(r=>r.name === user.month);
console.log(report)
  return (
    <>
<div className="month-banner">
  <div className="month-banner-content">
    <h1>{report.name}</h1>
    <hr />

    <br />
    <p>Dear, {user.fullName}</p>
    <p>DivineDigits Month Report For You</p>
  </div>
</div>

    </>
  )
}

export default Month