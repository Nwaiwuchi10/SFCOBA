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
          {/* <Heading
            subtitle="ST FINBARR’S OLD BOYS ASSOCIATION"
            title="We are always connected, no matter the distance."
          /> */}
          {/* <h5 className="hero-h5-h">
            As a team we are honored to be given the privilege to serve and take
            our beloved citadel of learning to much more greater heights
            upholding “own alma mater”.{" "}
          </h5> */}
          <div className="button" style={{ marginBottom: "50px" }}>
            <button className="primary-btn but">
              <Link to="/login" style={{ color: "white" }}>
                JOIN US
              </Link>
              {/* <i className="fa fa-long-arrow-alt-right"></i> */}
            </button>
            <button className="but">VIEW MEMBERS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
