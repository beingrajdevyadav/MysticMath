import React from 'react'
import data from '../assets/months.json'
import { useSelector } from 'react-redux'
import '../css/month.css'
import { useNavigate } from 'react-router-dom'



const Month = () => {
  const user = useSelector((state) => state.user);
const navigate = useNavigate();

  const report = data.find(r => r.name === user.month);
  // console.log(report)
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


      <div className="month-report">
        <div className="month-report-box">
          <h2>DivineDigits  {report.name} Report</h2>
          <hr />
        </div>

        <div className="month-report-box">
          <h3>Your Strengths</h3>
          <hr />

          <ul>
            {report.strengths.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>

        <div className="month-report-box">
          <h3>Your Life</h3>
          <hr />
          <p>{report.life}</p>
        </div>

        <div className="month-report-box">
          <h3>Your Qualities</h3>
          <hr />

          <ul>
            {report.qualities.map(q => <li key={q}>{q}</li>)}
          </ul>
        </div>

        <div className="month-report-box">
          <h3>Your Health</h3>
          <hr />
          <p>{report.health}</p>
        </div>

        <div className="month-report-box">
          <h3>Your Career</h3>
          <hr />
          <p>{report.career}</p>
        </div>

        <div className="month-report-box">
        <h3>Your Financial Habits</h3>
          <hr />
          <p>{report.financialHabits}</p>
        </div>
         
        <div className="month-report-box">
          <h3>Best Professions</h3>
          <hr />

          <ul>{report.bestProfessions.map(p => <li key={p}>{p}</li>)}</ul>
          </div>

        <div className="month-report-box">
          <h3>Spiritual Traits</h3>
          <hr />
          <p>{report.spiritualTraits}</p>
          </div>

        <div className="month-report-box">
          <h3>Your Weaknesses</h3>
          <hr />
          <ul>
            {report.weaknesses.map(w => <li key={w}>{w}</li>)}
          </ul>
          </div>

        <div className="month-report-box">
          <h3>Love Compatibility</h3>
          <hr />
          
          <ul>
            {report.loveCompatibility.best.map(l => <li key={l}>{l}</li>)}
          </ul>
          </div>

          <div className="month-report-box">
            <h3>Lucky Colours</h3>
            <hr />
            <ul>
              {
                report.luckyColors.map(c=><li key={c}>{c}</li>)
              }
            </ul>
          </div>

          <div className="month-report-box">
            <h3>Lucky Numbers</h3>
            <hr />

            <ul>
              {
                report.luckyNumbers.map(n=><li key={n}>{n}</li>)
              }
            </ul>
          </div>

          <div className="month-report-box">
            <h3>Advice</h3>
            <hr />

            <p>{report.advice}</p>
          </div>


          <div className="month-action">
            <button onClick={()=>navigate('/')}>Back To Home</button>
          </div>
      </div>
    </>
  )
}

export default Month