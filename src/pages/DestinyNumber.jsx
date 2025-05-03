import React from 'react'
import { useSelector } from 'react-redux'
import data from '../assets/destiny.json'
import '../css/destiny.css'



const DestinyNumber = () => {
  const user = useSelector((state) => state.user);
  
  const report = data.find((r)=>r.number == user.destinyNumber);

  console.log(report);
  return (
    <>
      <div className="destiny-banner">
        <div className="destiny-banner-content">
          <h1>Destiny Number  {user.destinyNumber} </h1>
          <hr />
          <p>Dear {user.fullName}</p>
          <p>DivineDigits Report For Destiny Number {user.destinyNumber}</p>
        </div>
      </div>

      <div className="destiny-report">
        <div className="destiny-report-box">
          <h3> DivineDigits Destiny Number Report</h3>
          <hr />
        </div>
      </div>
    </>
  )
}

export default DestinyNumber