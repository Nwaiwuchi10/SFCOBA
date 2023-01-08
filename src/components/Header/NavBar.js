import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Sfc from "../../assets/images/Sfc.jpg";
import "./Nav.css";
const NavBar = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="main-nav-div">
      {/* <Nav /> */}
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>

            <li>
              <Link to="/journal">Journal</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/courses">Join Us</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">SFCOBA</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
