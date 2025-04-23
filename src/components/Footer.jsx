import React from 'react'

const Footer = () => {
    const date = new Date();
    return (
        <div className='footer'>
            <div className="footer-content">
                <p>MysticMath By Rajdev Yadav</p>
                <p>Last Update : {date.toLocaleDateString()}</p>
            </div>
        </div>
    )
}

export default Footer