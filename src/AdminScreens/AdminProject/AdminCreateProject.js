import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import Sfc from "../../assets/images/Sfc.jpg";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../AdminDashboard/AdminLayout";
import "./AdminCreateProject.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularIndeterminate from "../../components/Loading/Progress";
import { Container } from "react-bootstrap";
const AdminCreateProject = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [projectTitle, setProjectTitle] = useState("");

  const [classOf, setClassOf] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);
  const uploadimage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convert2base64(file);
    setImage(base64);
    // setImage({ ...image, image: base64 });
    console.log(base64);
    // const reader = new FileReader();
  };
  const convert2base64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      projectTitle: projectTitle,
      image: image,
      classOf: classOf,
      content: content,
    };

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("https://sfcoba.herokuapp.com/api/projects", data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setProjectTitle("");

          setClassOf("");
          setContent("");
          setImage("");
          localStorage.setItem("token", data.token);

          console.log(res.data);
          toast.success("Login Sucessful", {
            position: toast.POSITION.TOP_LEFT,
          });
          navigate("/viewProjects");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Invalid email & Password");
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
                    Create a Project Blog
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
                        required
                        id="outlined-required"
                        label="Project Title "
                        type="text"
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-divs"
                        required
                        id="outlined-required"
                        label="SFCOBA Set "
                        type="text"
                        value={classOf}
                        onChange={(e) => setClassOf(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <TextField
                        required
                        className="input-label-input-divs"
                        id="outlined-required"
                        label="Blog Content"
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <TextField
                        required
                        className="input-label-input-divs"
                        id="outlined-required"
                        type="file"
                        multiple
                        accept=".jpeg, .png, .jpg, "
                        onChange={(e) => uploadimage(e)}
                      />
                    </div>

                    {loading && <CircularIndeterminate />}
                    <div class="d-flex justify-content-center">
                      <button
                        type="submit"
                        class="btn btn-success btn-block btn-lg "
                        style={{ background: "#0000CD" }}
                      >
                        Post
                      </button>
                      <ToastContainer />
                    </div>
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

export default AdminCreateProject;
