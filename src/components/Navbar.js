import React from 'react'
// import PropTypes from 'prop-types'

import {

  Link
} from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">NewsMonkey</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/about">About</Link> */}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select Country
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/in">India</Link></li>
            <li><Link className="dropdown-item" to="/us">United States of America</Link></li>
            <li><Link className="dropdown-item" to="/ae">United Arab Emirates</Link></li>
            <li><Link className="dropdown-item" to="/au">Australia</Link></li>
            <li><Link className="dropdown-item" to="/za">SouthAfrica</Link></li>
            
          </ul>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    )
}

// Navbar.propTypes = {

// }

export default Navbar

