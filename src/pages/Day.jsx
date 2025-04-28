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

      <div className="day-report">
        <div className="day-report-box">
          <h2>{report.day} Report</h2>
          <hr />
        </div>

        <div className="day-report-box">
          <h3>Your Strengths</h3>
          <hr />

          <ul>
            {day.strengths.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>

        <div className="day-report-box">
          <h3>Your Life</h3>
          <hr />
          <p>{day.life}</p>
        </div>

        <div className="day-report-box">
          <h3>Your Qualities</h3>
          <hr />

          <ul>
            {day.qualities.map(q => <li key={q}>{q}</li>)}
          </ul>
        </div>

        <div className="day-report-box">
          <h3>Your Health</h3>
          <hr />
          <p>{day.health}</p>
        </div>


        <div className="day-report-box">
          <h3>Your Career</h3>
          <hr />
          <p>{day.career}</p>
        </div>

        <div className="day-report-box">
          <h3>Your Financial Habits</h3>
          <hr />
          <p>{day.financialHabits}</p>
        </div>


        <div className="day-report-box">
          <h3>Best Professions</h3>
          <hr />
          <ul>
            {day.bestProfessions.map(p => <li key={p}>{p}</li>)}
          </ul>
        </div>

        <div className="day-report-box">
          <h3>Spiritual Traits</h3>
          <hr />
          <p>{day.spiritualTraits}</p>
        </div>

        <div className="day-report-box">
          <h3>Your Weaknesses</h3>
          <hr />
          <ul>
            {day.weaknesses.map(w => <li key={w}>{w}</li>)}
          </ul>
        </div>

        <div className="day-report-box">
          <h3>Love Compatibility</h3>
          <hr />
          <ul>
            {day.loveCompatibility.map(l => <li key={l}>{l}</li>)}
          </ul>
        </div>


        <div className="day-report-box">
          <h3>Lucky Numbers</h3>
          <hr />
          <ul>
            {day.luckyNumbers.map(l => <li key={l}>{l}</li>)}
          </ul>
        </div>

        <div className="day-report-box">
          <h3>Lucky Colours</h3>
          <hr />
          <ul>
            {day.luckyColors.map(l => <li key={l}>{l}</li>)}
          </ul>
        </div>

        <div className="day-report-box">
          <h3>Advice</h3>
          <hr />
          <p>{day.advice}</p>
        </div>

      </div>
    </>
  )
}

export default Day