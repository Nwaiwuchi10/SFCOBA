import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sdr from "../../assets/images/sdr.png";
import Nav from "./Nav";
import Sfc from "../../assets/images/Sfc.jpg";
import "./Nav.css";
import { Dropdown } from "react-bootstrap";
const NavBar = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const Admin = localStorage.getItem("isAdmin") === "true";
  const logout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("name", "");
    localStorage.setItem("userId", "");
    localStorage.setItem("isAdmin", "");
    localStorage.setItem("email", "");
    localStorage.setItem("userId", "");
    localStorage.setItem("username", "");

    navigate("/");
  };
  const [click, setClick] = useState(false);
  return (
    <div className="main-nav-div">
      {/* <Nav /> */}
      <header>
        <nav className="flexSB" style={{ textAlign: "center" }}>
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/" style={{ textAlign: "center" }}>
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                style={{
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                BroadCast
              </Link>
            </li>
            <li>
              <Link
                to="/our-team"
                style={{
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                Team
              </Link>
            </li>

            <li>
              <Link to="/login" style={{ textAlign: "center" }}>
                Calender
              </Link>
            </li>
            <li>
              <Link to="/contact-us" style={{ textAlign: "center" }}>
                Contact Us
              </Link>
            </li>
            {Admin ? (
              <li>
                <Link to="/admin/true" style={{ textAlign: "center" }}>
                  Admin
                </Link>
              </li>
            ) : userId ? (
              <li>
                <Link to="/userDashboard">
                  {localStorage.getItem("firstName")}{" "}
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  style={{
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
          <div className="start">
            {/* <div className="button"> */}
            <img
              src={sdr}
              alt="khhd"
              className="start-img-div"
              style={{
                width: "100%",
                height: "5vh",
                objectFit: "contain",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
            {/* </div> */}
          </div>

          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i
                className="fa fa-times v-ted"
                style={{ paddingBottom: "20px" }}
              >
                {" "}
              </i>
            ) : (
              <i className="fa fa-bars v-ted"></i>
            )}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
