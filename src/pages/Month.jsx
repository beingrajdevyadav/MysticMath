import React from 'react'
import data from '../assets/months.json'
import { useSelector } from 'react-redux'
const Month = () => {
  const monthName = useSelector((state)=>state.user.month);

const report = data.find(r=>r.name === monthName);
console.log(report)
  return (
    <>
<div className="month-banner">
  <div className="month-banner-content">
    <h1>{}</h1>
  </div>
</div>

    </>
  )
}

export default Month