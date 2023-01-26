import { Box, TextField } from "@mui/material";
import Sfc from "../../assets/images/Sfc.jpg";
import "./Register.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularIndeterminate from "../../components/Loading/Progress";

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
const Register = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "http://sfcoba.herokuapp.com/api/users/chapter"
      );
      console.log(data);
      setNews(data);
      // setLoading(false);

      //   localStorage.setItem("AdminUserDetails", JSON.stringify(data._id));
      localStorage.setItem("AdimUserId", data.user?._id);
    };

    fetchPosts();
  }, []);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [otherName, setOtherName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [yearOfGraduation, setYearOfGraduation] = useState("");
  const [membershipId, setMembershipId] = useState("");
  const [occupation, setOccupation] = useState("");
  const [contactAdress, setContactAdress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [chapter, setChapter] = useState("");
  const [profilePic, setProfilePic] = useState([]);
  const [mode, setMode] = useState("password");
  const [moder, setModer] = useState("password");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const uploadimage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convert2base64(file);
    setProfilePic(base64);
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
      profilePic: profilePic,
      occupation: occupation,
      contactAdress: contactAdress,

      chapter: chapter,
      email: email,
      firstName: firstName,
      secondName: secondName,
      otherName: otherName,
      phoneNumber: phoneNumber,
      membershipId: membershipId,
      yearOfGraduation: yearOfGraduation,
      password: password,
      confirmPassword: confirmPassword,
    };

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("https://sfcoba.herokuapp.com/api/auth/register", data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setEmail("");
          setFirstName("");
          setSecondName("");
          setOtherName("");
          setMembershipId("");
          setPhoneNumber("");
          setMembershipId("");
          setYearOfGraduation("");
          setPassword("");
          setConfirmPassword("");
          setProfilePic("");
          setChapter("");
          setContactAdress("");
          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

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
    <div>
      <NavBar />
      <section
        class="h-100 h-custom"
        style={{
          backgroundColor: "white",
          paddingTop: "50px",
        }}
      >
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
                  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                    Registration Info
                  </h3>
                  <p style={{ marginLeft: "15px" }}>
                    *pls all the blanck inputs are been required*
                  </p>
                  <form class="px-md-2" onSubmit={submitHandler}>
                    <div>
                      <div className="col-md-6 mb-4">
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
                      <div className="col-md-6 mb-4">
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
                    </div>

                    <div className="col-md-6 mb-4">
                      <FormControl>
                        <InputLabel htmlFor="outlined-adornment-password">
                          Confirm Password
                        </InputLabel>
                        <OutlinedInput
                          className="input-label-input-div"
                          id="outlined-adornment-password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
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
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-div"
                        required
                        id="outlined-required"
                        label="Surname"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        //   defaultValue="Match Day"
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-div"
                        required
                        id="outlined-required"
                        label="Second Name"
                        type="text"
                        value={secondName}
                        onChange={(e) => setSecondName(e.target.value)}
                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-div"
                        required
                        id="outlined-required"
                        label="Other Names"
                        type="text"
                        value={otherName}
                        onChange={(e) => setOtherName(e.target.value)}
                        //   defaultValue="Match Day"
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-div"
                        required
                        id="outlined-required"
                        label="Year of graduation"
                        type="text"
                        value={yearOfGraduation}
                        onChange={(e) => setYearOfGraduation(e.target.value)}
                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-div"
                        required
                        id="outlined-required"
                        label="Occupation"
                        type="text"
                        value={occupation}
                        onChange={(e) => setOccupation(e.target.value)}

                        //   defaultValue="Match Day"
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-div"
                        required
                        id="outlined-required"
                        label="Phone Number"
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        //   defaultValue="Match Day"
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <TextField
                        required
                        className="input-label-input-div"
                        id="outlined-required"
                        label="Contact Adress"
                        type="text"
                        value={contactAdress}
                        onChange={(e) => setContactAdress(e.target.value)}
                        //   defaultValue="Match Day"
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-div"
                        required
                        id="outlined-select-currency-native"
                        select
                        SelectProps={{
                          native: true,
                        }}
                        label="SFCOBA Chapter "
                        type="text"
                        value={chapter}
                        onChange={(e) => setChapter(e.target.value)}

                        //   defaultValue="Match Day"
                      >
                        {" "}
                        {news?.chapter?.map((usery) => (
                          <>
                            <option></option>
                            <option>{usery.chapter} </option>
                          </>
                        ))}
                      </TextField>
                    </div>
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-div"
                        required
                        id="outlined-required"
                        type="file"
                        multiple
                        accept=".jpeg, .png, .jpg, "
                        onChange={(e) => uploadimage(e)}
                      />
                    </div>

                    {loading && <CircularIndeterminate />}
                    <button
                      type="submit"
                      class="btn btn-primary btn-lg mb-1 "
                      style={{
                        background: "#0000CD",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      Register
                    </button>
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

export default Register;
