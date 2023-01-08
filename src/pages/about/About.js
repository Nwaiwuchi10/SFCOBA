import React from "react";
import "./About.css";
import cth from "../../assets/images/cth.jpg";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";
const About = () => {
  return (
    <div className="div-m-abt">
      <section className="aboutHome">
        <div className="container">
          <div className="text-center ht">WHO WE ARE</div>
          <div className="flexSB ">
            <div className=" left row img-abt">
              <img src={cth} alt="lxll" className="img-abt" />
            </div>
            <div className="right ">
              {/* <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' /> */}
              <div className="items">
                {homeAbout.map((val) => {
                  return (
                    <div className="item flexSB">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                      <div className="text">
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Awrapper /> */}
    </div>
  );
};

export default About;
