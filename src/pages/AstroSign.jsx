import React from 'react'
import { useSelector } from 'react-redux'
import "../css/astrosign.css"
import astro from '../assets/signs.json'

const AstroSign = () => {
  const report = useSelector((state) => state.user);
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
          <h3>Lucky Colours </h3>
          <hr />

          <ul>
            {current.luckyColors.map(color => <li key={color}>{color}</li>)}
          </ul>
        </div>

        
        <div className="astro-report-box"></div>
        <div className="astro-report-box"></div>
        <div className="astro-report-box"></div>
        <div className="astro-report-box"></div>
        <div className="astro-report-box"></div>
        <div className="astro-report-box"></div>

      </div>
    </>
  )
}

export default AstroSign