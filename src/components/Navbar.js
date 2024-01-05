import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            <div className="gradient">
              <div className="bg-primary rounded mx-2" 
              onClick={()=>props.toggleMode('primary')}
              style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
            </div>
            <div className="gradient">
              <div className="bg-success rounded mx-2" 
              onClick={()=>props.toggleMode('success')}
              style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
            </div>
            <div className="gradient">
              <div className="bg-danger rounded mx-2" 
              onClick={()=>props.toggleMode('danger')}
              style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
            </div>
            <div className="gradient">
              <div className="bg-warning rounded mx-2" 
              onClick={()=>props.toggleMode('warning')}
              style={{height:'20px', width:'20px', cursor:'pointer'}}></div>
            </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={()=>props.toggleMode('')}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.defaultProps = {
  title: "Stranger",
  mode: "dark"
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
