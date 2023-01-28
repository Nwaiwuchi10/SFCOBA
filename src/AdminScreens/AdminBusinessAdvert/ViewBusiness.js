import axios from "axios";
import React, { useEffect, useState } from "react";
import Message from "../../components/Message/Message";

import Loader from "../../components/Loading/Loader";

import { Image } from "react-bootstrap";
import AdminLayout from "../AdminDashboard/AdminLayout";
const ViewBusiness = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [poster, setPoster] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/businessAdvert/"
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
    <AdminLayout>
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
    </AdminLayout>
  );
};

export default ViewBusiness;
