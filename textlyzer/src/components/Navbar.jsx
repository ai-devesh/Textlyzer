import React from 'react';
import PropTypes from 'prop-types'

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Textlyzer"
}

export default function Navbar(props) {
  let hexColours = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let hex = "#"
  const colorFlipper = () => {
    for (let i = 0; i <= 7; i++) {
      hex += hexColours[Math.floor(Math.random() * hexColours.length)]
    }
    document.body.style.backgroundColor = hex;
    if(props.mode==='dark' && hex.length===9) {
      document.body.style.color = 'black'
    }
    hex = "#";
    return hex;
  }
  return (
    <div>
      <nav id="navbar" style={{borderBottom: "2px solid silver", backgroundColor: hex}} className={`navbar navbar-expand-lg bg-${hex} navbar-${props.mode}`}>
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
                <a className="nav-link" href="/">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">Disabled</a>
              </li>
            </ul>
            <button className={`btn btn-${props.mode === 'dark' ? 'dark' : 'light'} my-1 mx-2`} onClick={colorFlipper}>Flip Colour Theme</button>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="toggleDarkMode" />
              <label className={`form-check-label text-${props.mode === 'dark' ? "light" : "dark"}`} htmlFor="toggleDarkMode">{props.mode === 'light' ? "Enable dark mode" : "Disable dark mode"}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
} 
