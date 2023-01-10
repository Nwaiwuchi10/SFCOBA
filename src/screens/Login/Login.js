import { Link } from "react-router-dom";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import CircularIndeterminate from "../../components/Loading/Progress";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [mode, setMode] = useState("password");
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    if (mode === "password") {
      setMode("text");
    } else {
      setMode("password");
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: email,

      password: password,
    };

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("https://sfcoba.herokuapp.com/api/auth/login", data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setEmail("");

          setPassword("");

          localStorage.setItem("firstName", res.data.firstName);
          localStorage.setItem("secondName", res.data.secondName);
          localStorage.setItem("otherName", res.data.otherName);
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("userId", res.data._id);
          localStorage.setItem("roles", res.data.roles);
          localStorage.setItem("phoneNumber", res.data.phoneNumber);
          localStorage.setItem("membershipId", res.data.membershipId);
          localStorage.setItem("isAdmin", res.data.isAdmin);

          console.log(res.data);
          toast.success("Login Sucessful", {
            position: toast.POSITION.TOP_LEFT,
          });
          {
            localStorage.getItem("isAdmin") === "true"
              ? navigate("/Adminlogin")
              : navigate("/");
          }
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
    <div className="log-gi">
      <section class="background-radial-gradient overflow-hidden">
        <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div class="row  gx-lg-5 align-items-center mb-5">
            <div class="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10" }}>
              <h1
                class="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                The best offer <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for your business
                </span>
              </h1>
              <p
                class="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>

            <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                class="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                class="position-absolute shadow-5-strong"
              ></div>

              <div class="card bg-glass">
                <div class="card-body px-4 py-5 px-md-5">
                  <form onSubmit={submitHandler}>
                    <p>Please login to your account</p>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example3">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="form3Example3"
                        class="form-control"
                        placeholder="Phone number or email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4"
                        class="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    {loading && <CircularIndeterminate />}

                    <button
                      type="submit"
                      class="btn btn-primary btn-block mb-4"
                    >
                      Login
                    </button>

                    <div class="text-center">
                      <p>
                        <Link to="/register">Create an account</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
