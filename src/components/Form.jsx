import React from 'react'

const Form = () => {
    return (
        <form>
            <h2>Mystic Math </h2>
            <hr />

            <div className="input-container">
                <label htmlFor="name"></label>
                <input type="text" id='name' name='name' placeholder='Enter Full Name ' />
            </div>

            <div className="input-container">
                <label htmlFor="dob"></label>
                <input type="date" name="dob" id="dob" />
            </div>

            <button>Submit</button>
        </form>
    )
}

export default Form