import React from 'react'
// import React, {useState} from 'react'; {useState} is known as a hook
import PropTypes from 'prop-types'

export default function TextForm(props) {
  return (
    <>
        const[text, setText] = useState("Enter text here"); {/* This is used to track the change in our component's state in terms of the change in text, this uses array destructuring */}
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label">Example textarea</label>
            <textarea className="form-control" id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary">Convert to Uppercase</button>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string
};
