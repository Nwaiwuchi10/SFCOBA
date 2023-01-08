import { Link } from "react-router-dom";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CircularIndeterminate from "../../components/Loading/Progress";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [otherName, setOtherName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [yearOfGraduation, setYearOfGraduation] = useState("");
  const [membershipId, setMembershipId] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [mode, setMode] = useState("password");
  const [moder, setModer] = useState("password");
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    if (mode === "password") {
      setMode("text");
    } else {
      setMode("password");
    }
  };
  const handleClick2 = () => {
    if (moder === "password") {
      setModer("text");
    } else {
      setModer("password");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
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
      .post("http://localhost:5000/api/auth/register", data, headers)

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
    <div className="log-gi">
      <section class="background-radial-gradient overflow-hidden">
        <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div class="row gx-lg-5 align-items-center mb-5">
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
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1">
                            First name
                          </label>
                          <input
                            type="text"
                            id="form3Example1"
                            class="form-control"
                            placeholder="Enter your Surname"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example2">
                            Last name
                          </label>
                          <input
                            type="text"
                            id="form3Example2"
                            class="form-control"
                            placeholder="Enter your Last name"
                            value={secondName}
                            onChange={(e) => setSecondName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1">
                            Other Names
                          </label>
                          <input
                            type="text"
                            id="form3Example1"
                            class="form-control"
                            placeholder="Enter Other Names"
                            value={otherName}
                            onChange={(e) => setOtherName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example2">
                            phoneNumber
                          </label>
                          <input
                            type="text"
                            id="form3Example2"
                            class="form-control"
                            placeholder="Phone number "
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example1">
                            Year of Graduation
                          </label>
                          <input
                            type="text"
                            id="form3Example1"
                            class="form-control"
                            placeholder="Year of Graduation"
                            value={yearOfGraduation}
                            onChange={(e) =>
                              setYearOfGraduation(e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <label class="form-label" for="form3Example2">
                            Membership Id
                          </label>
                          <input
                            type="text"
                            id="form3Example2"
                            class="form-control"
                            placeholder="SFCOBA membership"
                            value={membershipId}
                            onChange={(e) => setMembershipId(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example3">
                        email address
                      </label>
                      <input
                        type="email"
                        id="form3Example3"
                        class="form-control"
                        placeholder=" email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4">
                        Password
                      </label>
                      <input
                        type={mode}
                        required
                        id="form3Example4"
                        class="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {mode === "password" ? (
                        <MdVisibility className="icon" onClick={handleClick} />
                      ) : (
                        <MdVisibilityOff
                          className="icon"
                          onClick={handleClick}
                        />
                      )}
                    </div>
                    <div class="form-outline mb-4">
                      <label class="form-label" for="form3Example4">
                        ConfirmPassword
                      </label>
                      <input
                        type={moder}
                        required
                        id="form3Example4"
                        class="form-control"
                        placeholder="Enter Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      {moder === "confirmPassword" ? (
                        <MdVisibility className="icon" onClick={handleClick2} />
                      ) : (
                        <MdVisibilityOff
                          className="icon"
                          onClick={handleClick2}
                        />
                      )}
                    </div>
                    {loading && <CircularIndeterminate />}
                    <button
                      type="submit"
                      class="btn btn-primary btn-block mb-4"
                    >
                      Sign up
                    </button>

                    <div class="text-center">
                      <p>
                        <Link to="/login">Login</Link>{" "}
                      </p>
                      {/* <button
                        type="button"
                        class="btn btn-link btn-floating mx-1"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </button>

                      <button
                        type="button"
                        class="btn btn-link btn-floating mx-1"
                      >
                        <i class="fab fa-google"></i>
                      </button>

                      <button
                        type="button"
                        class="btn btn-link btn-floating mx-1"
                      >
                        <i class="fab fa-twitter"></i>
                      </button>

                      <button
                        type="button"
                        class="btn btn-link btn-floating mx-1"
                      >
                        <i class="fab fa-github"></i>
                      </button> */}
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

export default SignUp;
