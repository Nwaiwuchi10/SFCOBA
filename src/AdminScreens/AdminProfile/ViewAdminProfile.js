import axios from "axios";
import React, { useEffect, useState } from "react";
import Message from "../../components/Message/Message";
import AdminLayout from "../AdminDashboard/AdminLayout";
import Loader from "../../components/Loading/Loader";
import { Link } from "react-router-dom";
const ViewAdminProfile = () => {
  const userId = localStorage.getItem("userId");
  const [poster, setPoster] = useState({});

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [show, setShow] = useState(false);
  const [loadings, setLoadings] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        `http://sfcoba.herokuapp.com/api/users/${userId}`
      );
      console.log(data);
      setPoster(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, [userId]);
  return (
    <AdminLayout>
      <h3 className="text-center mb-4 mt-4">VIEW YOUR PROFILE </h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="userD-div">
          <div class="container">
            <div class="col-xs-12">
              <div
                class="text-center"
                style={{ paddingBottom: "30px", paddingTop: "30px" }}
              >
                <img class="backdrop linktree" src={poster.profilePic} />
                <h2 style={{ color: "#ffffff", paddingTop: "20px" }}>
                  User Profile
                </h2>
                <h4 style={{ color: "#ffffff", paddingTop: "20px" }}>
                  <button>
                    <Link
                      to={`/admin/edithProfile/${userId}`}
                      style={{ color: "#0505ac" }}
                    >
                      {" "}
                      Edith Profile
                    </Link>
                  </button>
                </h4>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="col-xs-12">
              <div class="text-center">
                <div style={{ paddingBottom: "30px" }}>
                  <button
                    onclick="location.href='http://bit.ly/2IZURI7'"
                    type="button"
                    class="btn btn-outline-light shake "
                    style={{
                      width: "80%",
                      paddingTop: "10px",
                      paddingBottom: "10px",

                      fontWeight: "800",
                    }}
                  >
                    Full Name: {poster.firstName} {poster.secondName}
                  </button>
                </div>
                <div style={{ paddingBottom: "30px" }}>
                  <button
                    onclick="location.href='http://bit.ly/2SVZXES'"
                    type="button"
                    class="btn btn-outline-light "
                    style={{
                      width: "80%",

                      paddingTop: "10px",
                      paddingBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Email Adress: {poster.email}
                  </button>
                </div>
                <div style={{ paddingBottom: "30px" }}>
                  <button
                    onclick="location.href='#'"
                    type="button"
                    class="btn btn-outline-light "
                    style={{
                      width: "80%",
                      paddingTop: "10px",
                      paddingBottom: "10px",

                      fontWeight: "600",
                    }}
                  >
                    Phone Number:{poster.phoneNumber}
                  </button>
                </div>
                <div style={{ paddingBottom: "30px" }}>
                  <button
                    onclick="location.href='#'"
                    type="button"
                    class="btn btn-outline-light "
                    style={{
                      width: "80%",
                      paddingTop: "10px",
                      paddingBottom: "10px",

                      fontWeight: "600",
                    }}
                  >
                    Contact Adress:{poster.contactAdress}
                  </button>
                </div>
                <div style={{ paddingBottom: "30px" }}>
                  <button
                    onclick="location.href='#'"
                    type="button"
                    class="btn btn-outline-light bty-bet"
                    style={{
                      width: "80%",
                      paddingTop: "10px",
                      paddingBottom: "10px",

                      fontWeight: "600",
                    }}
                  >
                    Chapter:{poster.chapter}
                  </button>
                </div>
                <div style={{ paddingBottom: "30px" }}>
                  <button
                    onclick="location.href='#'"
                    type="button"
                    class="btn btn-outline-light "
                    style={{
                      width: "80%",

                      paddingTop: "10px",
                      paddingBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Membership ID:{poster.membershipId}
                  </button>
                </div>
                <div style={{ paddingBottom: "30px" }}>
                  <button
                    onclick="location.href='#'"
                    type="button"
                    class="btn btn-outline-light "
                    style={{
                      width: "80%",
                      paddingTop: "10px",
                      paddingBottom: "10px",

                      fontWeight: "600",
                    }}
                  >
                    Occupation:{poster.occupation}
                  </button>
                </div>
                <div style={{ paddingBottom: "30px" }}>
                  <button
                    onclick="location.href='#'"
                    type="button"
                    class="btn btn-outline-light "
                    style={{
                      width: "80%",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Year Of Graduation:{poster.yearOfGraduation}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default ViewAdminProfile;
