import React from 'react'
import "../css/home.css"
import { useSelector } from 'react-redux'
const Home = () => {
  const report = useSelector((state) => (state.user));
  console.log(report);
  return (
    <>
      <div className="home-banner">
        <div className="home-banner-content">
          <h1>{report.fullName}</h1>
          <hr />
          <p>MysticMath Report For {report.fullName}</p>
        </div>
      </div>

      <div className="home-content">

        <h2>Personal Information </h2>
        <hr />
        <div className="home-content-box">
          <p>Full Name :</p>
          <p>{report.fullName}</p>
        </div>
        <div className="home-content-box">
          <p>Date Of Birth :</p>
          <p>{report.dateOfBirth}</p>
        </div>


<br /> 
        <h2>MysticMath Report</h2>
        <hr />

        <div className="home-content-box">
          <p>Astrological Sign :</p>
          <p>{report.astroSign}</p>
        </div>
        <div className="home-content-box">
          <p>Birthday :</p>
          <p>{report.birthday}</p>
        </div>
        <div className="home-content-box">
          <p>Day :</p>
          <p>{report.day}</p>
        </div>
        <div className="home-content-box">
          <p>Month :</p>
          <p>{report.month}</p>
        </div>
        <div className="home-content-box">
          <p>Destiny Number :</p>
          <p>{report.destinyNumber}</p>
        </div>
        <div className="home-content-box">
          <p>Life Path Number :</p>
          <p>{report.lifePathNumber}</p>
        </div>
        <div className="home-content-box">
          <p>Soul Urge Number :</p>
          <p>{report.soulUrgeNumber}</p>
        </div>
        <div className="home-content-box">
          <p>Maturity Number :</p>
          <p>{report.maturityNumber}</p>
        </div>
        <div className="home-content-box">
          <p>Personality Number :</p>
          <p>{report.personalityNumber}</p>
        </div>
      </div>

    </>
  )
}

export default Home