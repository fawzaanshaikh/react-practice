import React from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  return (
    <>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label for="myBox" className="form-label">Example textarea</label>
            <textarea className="form-control" id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary"></button>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string
};
