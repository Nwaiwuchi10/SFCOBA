import React from "react";
import Heading from "./Heading";
import "./Hero.css";
import hds from "../../assets/images/hds.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${hds})`,
      }}
      className="hero"
    >
      <div className="container">
        <div className="row">
          <h3>ST FINBARR’S OLD BOYS ASSOCIATION</h3>
          <h3>We are always connected, no matter the distance.</h3>

          <div className="button" style={{ marginBottom: "50px" }}>
            <button className="primary-btn but">
              <Link to="/register" style={{ color: "white" }}>
                JOIN US
              </Link>
              {/* <i className="fa fa-long-arrow-alt-right"></i> */}
            </button>
            <button className="but">
              <Link to="/members" style={{ color: "inherit" }}>
                VIEW MEMBERS
              </Link>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
