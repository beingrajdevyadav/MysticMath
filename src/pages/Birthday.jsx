import React from 'react'
import { useSelector } from 'react-redux'
import birth from '../assets/birthday.json'
import '../css/birthday.css'
const Birthday = () => {
  const report = useSelector((state) => state.user);
  const current = birth.filter((b) => b.number == report.birthday)[0];
  console.log(current);
  return (
    <>
      <div className="birthday-banner">
        <div className="birthday-banner-content">
          <h1>{report.fullName}</h1>
          <hr />
          <p>Here's your predication with no. {report.birthday} birthday number  </p>
        </div>
      </div>

      <div className="birthday-report">
        <div className="birthday-report-box">
          <h2>{current.title}</h2>
          <hr />

          <p>{current.prediction}</p>
        </div>


        <div className="birthday-report-box">
          <h3>Your Personality Traits</h3>
          <hr />

          <ul>
            {current.personalityTraits.map(p => <li key={p}>{p}</li>)}
          </ul>
        </div>


        <div className="birthday-report-box">
          <h3>Your Life Purpose</h3>
          <hr />
          <p>{current.lifePurpose}</p>
        </div>

        <div className="birthday-report-box">
          <h3>Your Career Paths</h3>
          <hr />

          <ul>
            {current.careerPaths.map(c => <li key={c}>{c}</li>)}
          </ul>
        </div>

        <div className="birthday-report-box">
          <h3>Your Strengths</h3>
          <hr />

          <ul>
            {current.strengths.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>


        <div className="birthday-report-box">
          <h3>Your Challenges</h3>
          <hr />

          <ul>
            {current.challenges.map(c => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </div>

      <div className="birthday-action">
        <button>Back To Home</button>
      </div>
    </>
  )
}

export default Birthday