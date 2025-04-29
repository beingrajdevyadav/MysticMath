import React from 'react'
import "../css/footer.css"
const Footer = () => {
    const date = new Date();
    return (
        <div className='footer'>
            <div className="footer-content">
                <p>DivineDigits By Rajdev Yadav</p>
                <p>All Rights Reserved. &copy; {date.getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer