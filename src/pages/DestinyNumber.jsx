import React from 'react'
import { useSelector } from 'react-redux'
import data from '../assets/destiny.json'
import '../css/destiny.css'
import { useNavigate } from 'react-router-dom'



const DestinyNumber = () => {
  const user = useSelector((state) => state.user);
  const report = data.find((r) => r.number == user.destinyNumber);

  const navigate = useNavigate();
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

        <div className="destiny-report-box">
          <h3>Challenges For You</h3>
          <hr />

          <p>{report.challenges}</p>
        </div>


        <div className="destiny-report-box">
          <h3>Advice For You</h3>
          <hr />

          <p>{report.advice}</p>
        </div>


        <div className="report-action">
          <button onClick={()=>navigate('/')}>Back To Home</button>
        </div>
      </div>
    </>
  )
}

export default DestinyNumber