import React, { useState } from "react";
import { Link } from "react-router-dom";
import sdr from "../../assets/images/sdr.png";
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
              <Link to="/about">BroadCast</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>

            <li>
              <Link to="/journal">Calender</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">
              <img
                src={sdr}
                alt="khhd"
                style={{ width: "100%", height: "8vh", objectFit: "contain" }}
              />
            </div>
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
