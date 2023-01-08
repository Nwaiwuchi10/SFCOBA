import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Image } from "react-bootstrap";

import { online } from "../../dummydata";
// import "./Allcourses.css";
import "./Online.css";
const OnlineCourses = () => {
  const [poster, setPoster] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/hallfame/");
      console.log(data);
      setPoster(data);
      // setLoading(false);
      // setError(false);

      // localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);
  return (
    <div className="on-div-d">
      <section class="section">
        <div class="container">
          <div className="text-center ht">Hall Of Fame</div>
          <div className="row kj">
            {/* <div class="section_content teamy-team"> */}
            {poster?.map((val) => (
              <div class="col-md-3 mb-5 ">
                <div class="teamy teamy_style1 teamy_mask-circle">
                  <div class="teamy_layout">
                    <div class="teamy_preview">
                      {" "}
                      <img
                        thumbnail
                        src={val.imagePortrait}
                        class="teamy_avatar"
                        alt="The demo photo"
                      />{" "}
                    </div>
                    <div class="teamy_back">
                      <div
                        class="teamy_back-inner"
                        style={{ fontSize: "medium", fontWeight: "600" }}
                      >
                        <h3>Acknowledgement</h3>We the SFCOBA's are grateful to
                        you & those who has the pleasure to work for the school
                        in related projects. Each of the members of my
                        Dissertation Committee has provided me extensive
                        personal and professional guidance and taught me a great
                        deal about both scientific research and life in general.
                      </div>
                    </div>
                  </div>
                  <div class="teamy_content " thumbnail>
                    <h3 class="teamy_name">{val.name}</h3>
                    <h3 class="teamy_name">{val.yearofGraduation}</h3>
                    <span class="teamy_post">
                      {val.significantContribution}
                    </span>{" "}
                  </div>
                </div>
              </div>
            ))}
            {/* </div> */}
          </div>
        </div>
      </section>
      {/* <section className="online">
        <div className="container">
          <div className="text-center ht">Hall of Fame</div>
        
          <div className="content grid3">
            {poster?.map((val) => (
              <div className="box">
                <div className="img">
                  <img src={val.imagePortrait} />
                  <img src={val.imagePortrait} alt="" className="show" />
                </div>
                <h1>{val.name}</h1>
                <span>{val.yearofGraduation}</span>
                <div>{val.significantContribution}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default OnlineCourses;
