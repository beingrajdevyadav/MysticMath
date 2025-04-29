import React from 'react'
import "../css/home.css"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


const Home = () => {
  const report = useSelector((state) => (state.user));
  // console.log(report);
  return (
    <>
      <div className="home-banner">
        <div className="home-banner-content">
          <h1>{report.fullName}</h1>
          <hr />
          <p>Welcome To DivineDigits Report For {report.fullName}</p>
        </div>
      </div>

      <div className="home-content">

        <h2>Personal Information </h2>
        <hr />
        <br />

        <div className="home-content-box">
          <p>Full Name :</p>
          <p>{report.fullName}</p>
        </div>
        <div className="home-content-box">
          <p>Date Of Birth :</p>
          <p>{report.dateOfBirth}</p>
        </div>


        <br />
        <h2>DivineDigits Report</h2>
        <hr /> <br />

        <div className="home-content-box">
          <p>Astrological Sign :</p>
          <NavLink to={'/astro-sign'}>{report.astroSign}</NavLink>
        </div>
        <div className="home-content-box">
          <p>Birthday :</p>
          <NavLink to={'/birthday'}>{report.birthday}</NavLink>
        </div>
        <div className="home-content-box">
          <p>Day : </p>
          <NavLink to={'/day'}>{report.day}</NavLink>
        </div>
        <div className="home-content-box">
          <p>Month :</p>
          <NavLink to={'/month'}>{report.month}</NavLink>
        </div>
        <div className="home-content-box">
          <p>Destiny Number :</p>
          <NavLink to={'/destiny-number'}>{report.destinyNumber}</NavLink>
        </div>
        <div className="home-content-box">
          <p>Life Path Number :</p>
          <NavLink to={'/life-path-number'}>{report.lifePathNumber}</NavLink>
        </div>
        <div className="home-content-box">
          <p>Soul Urge Number :</p>
          <NavLink to={'/soul-urge-number'}>{report.soulUrgeNumber}</NavLink>
        </div>
        <div className="home-content-box">
          <p>Maturity Number :</p>
          <NavLink to={'/maturity-number'}>{report.maturityNumber}</NavLink>
        </div>
        <div className="home-content-box">
          <p>Personality Number :</p>
          <NavLink to={'/personality-number'}>{report.personalityNumber}</NavLink>
        </div>
      </div>

    </>
  )
}

export default Home