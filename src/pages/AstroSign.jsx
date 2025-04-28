import React from 'react'
import { useSelector } from 'react-redux'
import "../css/astrosign.css"
import astro from '../assets/signs.json'
import { useNavigate } from 'react-router-dom'

const AstroSign = () => {
  const report = useSelector((state) => state.user);
  const navigate = useNavigate();
  // console.log(astro)

  const current = astro.filter((sign) => sign.name == report.astroSign)[0];
  // console.log(current);

  return (
    <>
      <div className="astro-banner">
        <div className="astro-banner-content">
          <h1>{report.astroSign}</h1>
          <hr /> <br />
          <p>Dear, {report.fullName}! </p>
          <p>Here's your astro sign meaning.</p>
        </div>
      </div>

      <div className="astro-report">
        <div className="astro-report-box">
          <h2>{report.astroSign} Report</h2>
          <hr />
        </div>

        <div className="astro-report-box">
          <h3>Your Strengths</h3>
          <hr />

          <ul>
            {current.strengths.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>

        <div className="astro-report-box">
          <h3>Your Life</h3>
          <hr />
          <p>{current.life}</p>
        </div>

        <div className="astro-report-box">
          <h3>Your Qualities</h3>
          <hr />

          <ul>
            {current.qualities.map(q => <li key={q}>{q}</li>)}
          </ul>
        </div>

        <div className="astro-report-box">
          <h3>Your Health</h3>
          <hr />
          <p>{current.health}</p>
        </div>

        <div className="astro-report-box">
          <h3>Your Career</h3>
          <hr />
          <p>{current.career}</p>
        </div>

        <div className="astro-report-box">
          <h3>Your Financial Habits</h3>
          <hr />
          <p>{current.financialHabits}</p>
        </div>

        <div className="astro-report-box">
          <h3>Best Professions </h3>
          <hr />

          <ul>{current.bestProfessions.map(p => <li key={p}>{p}</li>)}</ul>
        </div>


        <div className="astro-report-box">
          <h3>Spiritual Traits</h3>
          <hr />

          <p>{current.spiritualTraits}</p>
        </div>

        <div className="astro-report-box">
          <h3>Your Weakness</h3>
          <hr />

          <ul>
            {current.weaknesses.map(w => <li key={w}>{w}</li>)}
          </ul>
        </div>


        <div className="astro-report-box">
          <h3>Love Compatibility</h3>
          <hr />

          <ul>
            {current.loveCompatibility.map(lc => <li key={lc}>{lc}</li>)}
          </ul>

        </div>

        <div className="astro-report-box">
          <h3>Lucky Colours </h3>
          <hr />

          <ul>
            {current.luckyColors.map(color => <li key={color}>{color}</li>)}
          </ul>
        </div>


        <div className="astro-report-box">
          <h3>Lucky Numbers</h3>
          <hr />

          <ul>{current.luckyNumbers.map(num => <li key={num}>{num}</li>)}</ul>
        </div>


<div className="astro-report-box">
  <h3>Advice</h3>
  <hr />
  <p>{current.advice}</p>
</div>
      </div>


      <div className="astro-actions">
        <button onClick={() => navigate(-1)}>Back To Home</button>
      </div>
    </>
  )
}

export default AstroSign