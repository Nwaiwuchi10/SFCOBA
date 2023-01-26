import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ViewMember.css";
import piccy from "../../assets/images/piccy.jpg";
import Loader from "../../components/Loading/Loader";
import Message from "../../components/Message/Message";
import NavBar from "../../components/Header/NavBar";
import Footer from "../../components/footer/Footer";
const ViewMembers = () => {
  const [poster, setPoster] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://sfcoba.herokuapp.com/api/users"
      );
      console.log(data);
      setPoster(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);
  return (
    <div>
      <NavBar />
      <div class="container text-center  mb-2 mt-5">
        <h3 class="mb-0 ">SFCOBA MEMEBRS</h3>
        <span></span>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">Failed</Message>
      ) : (
        <div class="container mt-3">
          <div class="row">
            {poster?.map((use) => (
              <>
                <div class="col-md-3 mb-4 ">
                  <div class="bg-white p-3 text-center rounded box">
                    {use.profilePic ? (
                      <img
                        class="img-responsive "
                        src={use.profilePic}
                        alt="ddjjds"
                        style={{
                          width: "100%",
                          height: "20vh",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <img
                        class="img-responsive rounded-circle"
                        src={piccy}
                        alt="ddjjds"
                        style={{ width: "90%" }}
                      />
                    )}

                    <h5 class="mt-3 name">
                      {use.firstName}
                      {use.secondName}{" "}
                    </h5>
                    {use.yearOfGraduation ? (
                      <span class="work d-block">
                        {use.yearOfGraduation}{" "}
                        <strong className="mr-4">Set</strong>{" "}
                      </span>
                    ) : (
                      <>
                        <span class="work d-block">
                          {use.yearOfGraduation}{" "}
                          <strong className="mr-4"></strong>{" "}
                        </span>
                      </>
                    )}

                    <div class="mt-4 work d-block">
                      <span>{use.occupation}</span>
                    </div>
                    <div class="mt-4">
                      <h6 class="v-profile">View Profile</h6>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ViewMembers;
