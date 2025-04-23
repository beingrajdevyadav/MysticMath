import React, { useRef, useState } from 'react'
import "../css/form.css"
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

        console.log("Full Name: ", fullName);
        console.log("Date of Birth: ", dob);
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
                    <label htmlFor="">Pick Data Of Birth :</label>
                    <input value={dob} onChange={e => setDob(e.target.value)} type="date" ref={dateInputRef} name="dob" id="dob" style={{ display: "none" }} />
                    <button onClick={handleDatePicker} type='button'><i className="fa-solid fa-calendar-days"></i></button>
                </div>

                <button className='submit-btn' type='submit'>Submit</button>
            </form>
        </div>

    )
}

export default Form