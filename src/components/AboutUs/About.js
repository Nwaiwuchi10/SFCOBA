import React, { Fragment, useState } from "react";
import "./About.css";
import fn from "../../assets/images/fn.jpg";

const About = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (index) => {
    setToggleTab(index);
  };
  return (
    <Fragment>
      <div className="about">
        <div className="row">
          <div className="column">
            <div className="about-img">
              <img src={fn} alt="jhfdfrf" className="about-img" />
            </div>
          </div>

          <div className="column">
            <div className="tabs">
              <div
                className={
                  toggleTab === 1 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(1)}
              >
                <h2>About</h2>
              </div>

              <div
                className={
                  toggleTab === 2 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(2)}
              >
                <h2>Membership & Governance</h2>
              </div>

              <div
                className={
                  toggleTab === 3 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(3)}
              >
                <h2>Mission</h2>
              </div>
            </div>

            <div className="tab-content">
              {/* About Content */}

              <div
                className={
                  toggleTab === 1 ? "content active-content" : "content"
                }
              >
                <h2>My Story</h2>
                <p>
                  Saint Finbarr’s College, Akoka, Yaba, Lagos, Nigeria has a
                  rich history and illustrious record of producing leaders in
                  various professional segments both domestically and
                  internationally.
                </p>
                <h3>History</h3>
                <p>
                  Rev. Father D.J. Slattery came to Nigeria in 1939. He
                  initially served in a parish in the Yoruba Inland Town in the
                  Old Western Region. He was later posted to St. Gregory’s
                  College, Obalende as a teacher. He eventually became the Games
                  Master for the school. He later became the editor of the
                  Catholic Herald in Mushin. It was during this period that the
                  thought of establishing a unique school occurred to him. His
                  school became the first bilateral school in the country,
                  combining full Grammar (called Basic) with Arts and Technical
                  subjects. In the 1955/56 academic year, with six students,
                  fondly referred to as “the first six”, a new school, but
                  without a name, was born.
                </p>
              </div>

              {/* Skills Content */}

              <div
                className={
                  toggleTab === 2 ? "content active-content" : "content"
                }
              >
                <div className="exp-column">
                  <h3>Membership</h3>
                  <span></span>
                  <p>
                    Membership is open to any person who has had the opportunity
                    of being a student of the College for at least one academic
                    year.
                  </p>
                </div>
                <div className="exp-column">
                  <h3>Membership Phase</h3>
                  <span></span>
                  <p>
                    Membership is open to any person who has Indicated his
                    desire, through his Branch, Chapter or Set to be associated
                    with other Old Boys in furtherance of the objectives of the
                    Association.
                  </p>
                </div>
                <div className="exp-column">
                  <h3>Membership Form Price</h3>
                  <span></span>
                  <p>
                    Membership is open to any person who has paid an application
                    and registration fee of N 1,000.00 or any such sum as the
                    National Executive Committee may from time to time fix, on a
                    one-off basis.
                  </p>
                </div>
                <div className="exp-column">
                  <h3>Financially Up to date</h3>
                  <span></span>
                  <p>
                    A registered Member who defaults financially shall not be
                    eligible to vote or be voted for.
                  </p>
                </div>
              </div>

              {/* Experience Content */}

              <div
                className={
                  toggleTab === 3 ? "content active-content" : "content"
                }
              >
                <div className="exp-column">
                  <h3>Union with P.T.A</h3>
                  <span></span>
                  <p>
                    To provide a forum to foster stronger links between the Old
                    Boys and the School authorities; Old Boys and OldBoys; Old
                    Boys and present students; Old Boys and the
                    Parents/Teachers’ Association.
                  </p>
                </div>

                <div className="exp-column">
                  <h3>Helping Hands</h3>
                  <span></span>
                  <p>
                    To encourage the Older Members and the younger ones, to know
                    one another and render assistance whenever possible to each
                    other, socially, economically, financially and
                    educationally.
                  </p>
                </div>

                <div className="exp-column">
                  <h3>School Development</h3>
                  <span></span>
                  <p>
                    To render any assistance that may become necessary and
                    possible within the capacity of the Association for further
                    development of the institution, educationally or otherwise
                  </p>
                </div>
                <div className="exp-column">
                  <h3>Protecting the School Image</h3>
                  <span></span>
                  <p>
                    To help to further promote and protect the image of the
                    School within and outside the Country and in all educational
                    institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
