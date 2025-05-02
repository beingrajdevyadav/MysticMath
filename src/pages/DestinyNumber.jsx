import React from 'react'
import { useSelector } from 'react-redux'
import '../css/destiny.css'



const DestinyNumber = () => {
  const user = useSelector((state)=>state.user);
  return (
    <>
<div className="destiny-banner">
  <div className="destiny-banner-content">
    <h1>Destiny Number  {user.destinyNumber} </h1>
    <hr />
    <p>Dear {user.fullName}</p>
    <p>DivineDigits Report For DN {user.destinyNumber}</p>
  </div>
</div>
    </>
  )
}

export default DestinyNumber