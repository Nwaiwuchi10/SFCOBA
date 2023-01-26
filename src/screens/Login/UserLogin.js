import { Box, TextField } from "@mui/material";
import Sfc from "../../assets/images/Sfc.jpg";
import "../Join Us/Register.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularIndeterminate from "../../components/Loading/Progress";
import "./Login.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import FileBase64 from "react-file-base64";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import NavBar from "../../components/Header/NavBar";
import Footer from "../../components/footer/Footer";
const UserLogin = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [mode, setMode] = useState("password");
  const [moder, setModer] = useState("password");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", res.data._id);
          localStorage.setItem("ProfilePic", res.data.profilePic);
          localStorage.setItem("isAdmin", res.data.isAdmin);
          localStorage.setItem("firstName", res.data?.firstName);
          localStorage.setItem("secondName", res.data.secondName);
          localStorage.setItem("otherName", res.data.otherName);
          localStorage.setItem("email", res.data.email);

          localStorage.setItem("roles", res.data.roles);
          localStorage.setItem("phoneNumber", res.data.phoneNumber);
          localStorage.setItem("membershipId", res.data.membershipId);

          console.log(res.data);
          toast.success("Login Sucessful", {
            position: toast.POSITION.TOP_LEFT,
          });
          {
            localStorage.getItem("isAdmin") === "true"
              ? navigate("/Admin/true")
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
    <div>
      <NavBar />
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
                    Login Here
                  </h3>
                  <p
                    class="d-flex justify-content-center"
                    style={{ marginLeft: "15px" }}
                  >
                    *pls all the blanck inputs are been required*
                  </p>
                  <form class="px-md-2" onSubmit={submitHandler}>
                    <div class="form-outline mb-4">
                      <TextField
                        required
                        id="outlined-required"
                        label="Email "
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-label-input-div"
                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div class="form-outline mb-4">
                      <FormControl>
                        <InputLabel htmlFor="outlined-adornment-password">
                          Password
                        </InputLabel>
                        <OutlinedInput
                          className="input-label-input-div"
                          id="outlined-adornment-password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </FormControl>
                    </div>

                    {loading && <CircularIndeterminate />}
                    <div class="d-flex justify-content-center">
                      <button
                        type="submit"
                        class="btn btn-primary btn-lg mb-1 "
                        style={{
                          background: "#0000CD",
                        }}
                      >
                        Login
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
      <Footer />
    </div>
  );
};

export default UserLogin;
