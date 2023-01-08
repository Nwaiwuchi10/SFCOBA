import React, { useState } from "react";
import Heading from "../hero/Heading";
import { testimonal } from "../../dummydata";
import cth from "../../assets/images/cth.jpg";
import "./Testimony.css";
const Testimony = () => {
  const [testimonal, setTestimonal] = useState([
    {
      id: 1,
      name: "ROGER SCOTT",
      post: "MARKETING MANAGER",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "../../assests/images/cth.jpg",
    },
    {
      id: 2,
      name: "ROGER SCOTT",
      post: "MARKETING MANAGER",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      cover: "./images/testo/t2.webp",
    },
    {
      id: 3,
      name: "ROGER SCOTT",
      post: "MARKETING MANAGER",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      cover: "./images/testo/t3.webp",
    },
  ]);
  return (
    <div className="testimony-div">
      <section className="testimonal padding">
        <div className="container">
          {/* <Heading subtitle="TESTIMONIAL" title="Our Successful Students" /> */}
          <div className="text-center ht">Our Team</div>
          <div className=" content grid2">
            <div className="items shadow">
              <div className="box flex">
                <div className="img">
                  <img src={cth} alt="kkk" />
                  <i className="fa fa-quote-left icon"></i>
                </div>
                <div className="name">
                  <h2>JAMES BROWN</h2>
                  <span>EXECUTIVE MANAGER</span>
                </div>
              </div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="items shadow">
              <div className="box flex">
                <div className="img">
                  <img src={cth} alt="kkk" />
                  <i className="fa fa-quote-left icon"></i>
                </div>
                <div className="name">
                  <h2>OBI JOHN</h2>
                  <span>ADVERT MANAGER</span>
                </div>
              </div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
            <div className="items shadow">
              <div className="box flex">
                <div className="img">
                  <img src={cth} alt="kkk" />
                  <i className="fa fa-quote-left icon"></i>
                </div>
                <div className="name">
                  <h2>NWAIWU CHRIS</h2>
                  <span>PROJECT MANAGER</span>
                </div>
              </div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimony;
