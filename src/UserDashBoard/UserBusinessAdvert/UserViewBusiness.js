import axios from "axios";
import React, { useEffect, useState } from "react";
import Message from "../../components/Message/Message";
import UserLayout from "../UserDashLayout/UserLayout";
import Loader from "../../components/Loading/Loader";
import "./ViewBusiness.css";
import { Image } from "react-bootstrap";
const UserViewBusiness = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [poster, setPoster] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "http://sfcoba.herokuapp.com/api/businessAdvert/"
      );
      console.log(data);
      setPoster(data);
      setLoading(false);
      setError(false);

      // localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);
  return (
    <UserLayout>
      <h3 className="text-center mt-2 ">Business Advert</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">Failed</Message>
      ) : (
        <div className="disp-broad">
          {poster?.map((val) => (
            <>
              <div class="lightbox bnm">
                <img
                  src={val.image}
                  style={{
                    width: "100%",
                    height: "60vh",
                    objectFit: "contain",
                  }}
                  alt="Gallery image 1"
                  class="ecommerce-gallery-main-img active"
                />
              </div>
            </>
          ))}
        </div>
      )}
    </UserLayout>
  );
};

export default UserViewBusiness;
