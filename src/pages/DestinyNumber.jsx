import React from 'react'
import { useSelector } from 'react-redux'
import data from '../assets/destiny.json'
import '../css/destiny.css'



const DestinyNumber = () => {
  const user = useSelector((state) => state.user);

  const report = data.find((r) => r.number == user.destinyNumber);

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


        <div className="destiny-report-box">
          <h3>Life Purpose</h3>
          <hr />
          <p>{report.lifePurpose}</p>
        </div>

        <div className="destiny-report-box">
          <h3>Your Strengths</h3>
          <hr />

          <p>{report.strengths}</p>
        </div>

        <div className="destiny-report-box">
          <h3>Your Career</h3>
          <hr />

          <ul>
            {
              report.career.map((c) => <li key={c}>{c}</li>)
            }
          </ul>
        </div>

        <div className="destiny-report-box">
          <h3>Love And Relationships</h3>
          <hr />

          <p>{report.loveAndRelationships}</p>
        </div>

        <div className="destiny-report-box">
          <h3>Spiritual Growth</h3>
          <hr />

<p>{report.spiritualGrowth}</p>
        </div>
      </div>
    </>
  )
}

export default DestinyNumber