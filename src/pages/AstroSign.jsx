import React from 'react'
import { useSelector } from 'react-redux'
import "../css/astrosign.css"
import astro from '../assets/signs.json'

const AstroSign = () => {
  const report = useSelector((state)=>state.user);
  // console.log(astro)

  const current = astro.filter((sign)=>sign.name == report.astroSign);
  console.log(current);
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
    </>
  )
}

export default AstroSign