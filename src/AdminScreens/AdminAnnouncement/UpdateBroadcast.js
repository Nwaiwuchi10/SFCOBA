import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../AdminDashboard/AdminLayout";
import "../AdminProject/AdminCreateProject.css";
import Sfc from "../../assets/images/Sfc.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularIndeterminate from "../../components/Loading/Progress";
import axios from "axios";
const UpdateBroadcast = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [caption, setCaption] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      caption: caption,
      content: content,
    };

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .put(
        `https://sfcoba.herokuapp.com/api/announcement/update/${id}`,
        data,
        headers
      )

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setContent("");
          setCaption("");

          localStorage.setItem("token", data.token);

          console.log(res.data);
          toast.success("Post Sucessful");
          navigate("/viewBroadcast");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(
          "Failed to create a post, check your network connection or input the correct textfields"
        );
      });
  };
  return (
    <AdminLayout>
      <section class="h-100 h-custom" style={{ backgroundColor: "white" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-8 col-xl-6">
              <div class="card rounded-3">
                <img
                  src={Sfc}
                  class="w-100"
                  style={{
                    borderTopLeftRadius: ".3rem",
                    borderTopRightRadius: ".3rem",
                    height: "20vh",
                    objectFit: "contain",
                  }}
                  alt="Sample photo"
                />
                <div class="card-body p-4 p-md-5">
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 d-flex justify-content-center">
                    Update a Hall Of Fame Blog
                  </h3>
                  <p
                    class="d-flex justify-content-center"
                    style={{ marginLeft: "15px" }}
                  >
                    *pls all the blanck inputs are been required*
                  </p>

                  <form onSubmit={submitHandler}>
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-divs"
                        id="outlined-required"
                        label="Caption"
                        type="text"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-divs"
                        id="outlined-required"
                        label="Content "
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>

                    {loading && <CircularIndeterminate />}
                    <div class="d-flex justify-content-center">
                      <button
                        type="submit"
                        class="btn btn-success btn-block btn-lg "
                        style={{ background: "#0000CD" }}
                      >
                        Update a BroadCast
                      </button>
                    </div>
                    <ToastContainer />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
};

export default UpdateBroadcast;
