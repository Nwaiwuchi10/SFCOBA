import React from "react";
import fn from "../../assets/images/fn.jpg";
import bj from "../../assets/images/bj.png";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/Header/NavBar";
import "./OurTeam.css";
const OurTeam = () => {
  return (
    <div className="ourteam-main-div">
      <NavBar />
      <div className="ourt-dis">
        <div id="container">
          <div class="product-details">
            <h1 className="osyt">Prof Edwin okere</h1>
            <span class="hint-star star">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star-o" aria-hidden="true"></i>
            </span>

            <p class="information ">'General President SFCOBA in Nigeria'.</p>
          </div>

          <div class="product-image">
            <img src={bj} alt="jdjhc" style={{ objectFit: "cover" }} />

            <div class="info">
              <h2> Portfolio</h2>
              <ul>
                <li>
                  <strong>Set : </strong>2005{" "}
                </li>
                <li>
                  <strong>Chapter : </strong>Lagos
                </li>
                <li>
                  <strong>Position: </strong>President
                </li>
                <li>
                  <strong>Occupation: </strong>Lecturer
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="container">
          <div class="product-details">
            <h1>Prof Taiwo okoro</h1>
            <span class="hint-star star">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star-o" aria-hidden="true"></i>
            </span>

            <p class="information">'General President SFCOBA in Nigeria'.</p>
          </div>

          <div class="product-image">
            <img src={fn} alt="jdjhc" style={{ objectFit: "cover" }} />

            <div class="info">
              <h2> Description</h2>
              <ul>
                <li>
                  <strong>Height : </strong>5 Ft{" "}
                </li>
                <li>
                  <strong>Shade : </strong>Olive green
                </li>
                <li>
                  <strong>Decoration: </strong>balls and bells
                </li>
                <li>
                  <strong>Material: </strong>Eco-Friendly
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="container">
          <div class="product-details">
            <h1>Prof Edwin okere</h1>
            <span class="hint-star star">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star-o" aria-hidden="true"></i>
            </span>

            <p class="information">'General President SFCOBA in Nigeria'.</p>
          </div>

          <div class="product-image">
            <img src={bj} alt="jdjhc" style={{ objectFit: "cover" }} />

            <div class="info">
              <h2> Description</h2>
              <ul>
                <li>
                  <strong>Height : </strong>5 Ft{" "}
                </li>
                <li>
                  <strong>Shade : </strong>Olive green
                </li>
                <li>
                  <strong>Decoration: </strong>balls and bells
                </li>
                <li>
                  <strong>Material: </strong>Eco-Friendly
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OurTeam;
