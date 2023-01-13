import { TextField } from "@mui/material";
import { Box } from "@mui/system";
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
      <section>
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card jbd" style={{ borderRadius: "15px" }}>
                  <div class="card-body p-5">
                    <h3 class="text-uppercase text-center mb-5">
                      Create a Project Blog
                    </h3>

                    <form onSubmit={submitHandler}>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <Box
                            // component="form"
                            sx={{
                              "& .MuiTextField-root": {
                                m: 1,
                                // width: "24ch ",
                              },
                            }}
                            className="gf-width"
                            noValidate
                            autoComplete="off"
                          >
                            <TextField
                              required
                              id="outlined-required"
                              label="Project Title "
                              type="text"
                              value={projectTitle}
                              onChange={(e) => setProjectTitle(e.target.value)}

                              //   defaultValue="Match Day"
                            />
                          </Box>
                        </div>
                        <div className="col-md-6 mb-4">
                          <Box
                            // component="form"
                            sx={{
                              "& .MuiTextField-root": {
                                m: 1,
                                // width: "24ch ",
                              },
                            }}
                            className="gf-width"
                            noValidate
                            autoComplete="off"
                          >
                            <TextField
                              required
                              id="outlined-required"
                              label="SFCOBA Set "
                              type="text"
                              value={classOf}
                              onChange={(e) => setClassOf(e.target.value)}

                              //   defaultValue="Match Day"
                            />
                          </Box>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <Box
                            // component="form"
                            sx={{
                              "& .MuiTextField-root": {
                                m: 1,
                                // width: "24ch ",
                              },
                            }}
                            className="gf-width"
                            noValidate
                            autoComplete="off"
                          >
                            <TextField
                              required
                              id="outlined-required"
                              label="Blog Content"
                              type="text"
                              value={content}
                              onChange={(e) => setContent(e.target.value)}

                              //   defaultValue="Match Day"
                            />
                          </Box>
                        </div>
                        <div className="col-md-6 mb-4">
                          <Box
                            // component="form"
                            sx={{
                              "& .MuiTextField-root": {
                                m: 1,
                                // width: "26ch ",
                              },
                            }}
                            className="gf-width"
                            noValidate
                            autoComplete="off"
                          >
                            <TextField
                              required
                              id="outlined-required"
                              type="file"
                              multiple
                              accept=".jpeg, .png, .jpg, "
                              onChange={(e) => uploadimage(e)}
                            />
                          </Box>
                        </div>
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
        </div>
      </section>
    </AdminLayout>
  );
};

export default AdminCreateProject;
