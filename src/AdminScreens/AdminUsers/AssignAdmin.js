import { Checkbox } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sfc from "../../assets/images/Sfc.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularIndeterminate from "../../components/Loading/Progress";
import AdminLayout from "../AdminDashboard/AdminLayout";

import "react-toastify/dist/ReactToastify.css";

const AssignAdmin = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const redirect = location.search ? location.search.split("=")[1] : "/";

  //   localStorage.getItem("userId");
  const [user, setUser] = useState({ id });
  const [isAdmin, setIsAdmin] = useState("");

  const [loading, setLoading] = useState(false);

  //   const userId = localStorage.getItem("userId");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      isAdmin: isAdmin,
      user: user,
    };

    setLoading(true);

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .put(
        `http://sfcoba.herokuapp.com/api/users/adminUpdate/${id}`,
        data,
        headers
      )

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setIsAdmin("");
          setUser("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("NewUserRole", res.data.roles);

          console.log(res.data);
          toast.success("Roles Category created sucessfully");
          navigate("/getUsers");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Failed to create roles");
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
                    User Assign to an Admin
                  </h3>
                  <p
                    class="d-flex justify-content-center"
                    style={{ marginLeft: "15px" }}
                  >
                    * Admin User*
                  </p>

                  <form onSubmit={submitHandler}>
                    <div
                      className="form-outline mb-4 "
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <Checkbox
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 48 } }}
                        type="checkbox"
                        label="Is Admin"
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                      ></Checkbox>
                    </div>

                    {loading && <CircularIndeterminate />}
                    <div class="d-flex justify-content-center">
                      <button
                        type="submit"
                        class="btn btn-success btn-block btn-lg "
                        style={{ background: "#0000CD" }}
                      >
                        Assign user to an Admin
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

export default AssignAdmin;
