import React from 'react'
import { useSelector } from 'react-redux'

const Day = () => {
  const report = useSelector((state)=>state.user);
  return (
    <>
    <div className="day-banner">

    </div>
    </>
  )
}

export default Day