import React, { useRef, useState } from 'react'
import { showErrorToast,showSuccessToast } from "../utils/toast";

import "../css/form.css";
import { getAstroSign, getDayName, getDestinyNumber, getLifePathNumber, getMaturityNumber, getMonthName, getPersonalityNumber, getSoulUrgeNumber } from '../utils/mystic';



const Form = () => {
    const [fullName, setFullName] = useState("");
    const [dob, setDob] = useState("");

    const dateInputRef = useRef(null);


    // Handle Date Picker
    const handleDatePicker = () => {
        dateInputRef.current.showPicker();
    }


    // handle Form Submit
    const handleSubmit = (e) => {
        e.preventDefault();


        // to check full name
        if (!fullName) {
            showErrorToast("Full Name Required! 😌");
            return;
        }


        // to check date of birth
        if (!dob) {
            showErrorToast("Date Of Birth Required! 😌");
            return;
        }


        // to extract dd, mm and yyyy from date of birth

        const date = new Date(dob)
        const dd = date.getDate();
        const mm = date.getMonth() + 1;
        const yyyy = date.getFullYear();

        console.log(dd, mm, yyyy);

        const report ={
            fullName: fullName,
            dateOfBirth: dob,
            destinyNumber: getDestinyNumber(fullName),
            lifePathNumber: getLifePathNumber(dd, mm, yyyy),
            personalityNumber: getPersonalityNumber(fullName),
            soulUrgeNumber: getSoulUrgeNumber(fullName),
            month: getMonthName(mm),
            astroSign: getAstroSign(dd, mm),
            day: getDayName(dd, mm, yyyy),
            maturityNumber: getMaturityNumber(fullName, dd, mm, yyyy),
            birthday: dd,
        }


        // to check
        console.log(report);
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h3>Dive In Mystic World  </h3>
                <hr />

                <div className="input-container">
                    <input autoComplete='off' value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" id='name' name='name' placeholder='Enter Full Name ' />
                </div>

                <div className="input-container flex">
                    <label htmlFor="">{dob? dob : "Pick Data Of Birth :"} </label>
                    <input value={dob} onChange={e => setDob(e.target.value)} type="date" ref={dateInputRef} name="dob" id="dob" style={{ display: "none" }} />
                    <button onClick={handleDatePicker} type='button'><i className="fa-solid fa-calendar-days"></i></button>
                </div>

                <button className='submit-btn' type='submit'>Submit</button>
            </form>
        </div>

    )
}

export default Form