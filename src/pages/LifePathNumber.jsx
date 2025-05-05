import React from 'react'
import data from '../assets/lifepaths.json'
import '../css/life.css'

const LifePathNumber = () => {
  console.log(data);
  return (
    <>
      <div className="life-banner">
        <div className="life-banner-content">
          <h1>Life Path Number</h1>
          <hr />
          <p>Discover your life path number and its significance.</p>
        </div>
      </div>

      <div className="life-report">
        <div className="life-report-box">
          <h3>Life Path Report</h3>
          <hr />
        </div>

        

      </div>
    </>
  )
}

export default LifePathNumber