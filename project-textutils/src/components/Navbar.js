// Typed in rfc to get React Function-based Component

import React from 'react'
import PropTypes from 'prop-types' // type impt to get prop types import

export default function Navbar(props) {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark"> {/* Earlier it was bg-light and navbar-light */}
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutText}</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
    </>
  );
}

// This defines the datatypes of the props that are sent to the function-based component
Navbar.propTypes = {
    title: PropTypes.string.isRequired, // This makes the prop to be sent necessarily when it has no default value
    aboutText: PropTypes.string
}; // type pts for PropTypes.string

// This defines the default values of the props when no particular prop is provided
Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About text here"
};