import React from 'react'
import "../css/preloader.css"
const Preloader = () => {
    return (
        <>
            <div className='logo'>
                <div className="icon">
                    <i className="fa-solid fa-wand-sparkles"></i>
                    <p> MysticMath</p>
                </div>

                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>
            </div>
        </>
    )
}

export default Preloader