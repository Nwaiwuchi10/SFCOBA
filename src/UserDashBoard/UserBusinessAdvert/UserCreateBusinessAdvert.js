import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import CircularIndeterminate from "../../components/Loading/Progress";
import UserLayout from "../UserDashLayout/UserLayout";
import Sfc from "../../assets/images/Sfc.jpg";

const UserCreateBusinessAdvert = () => {
  const navigate = useNavigate();

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
      image: image,
    };

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("http://sfcoba.herokuapp.com/api/businessAdvert", data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setImage("");
          localStorage.setItem("token", data.token);

          console.log(res.data);
          toast.success("Post Sucessful");
          navigate("/userDashboard");
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
    <UserLayout>
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
                    Advertise your business here
                  </h3>
                  <p class="d-flex justify-content-center">
                    <ul>
                      <li>
                        *pls only image soft copy of your business flyer or
                        business card is allowed, if not your post will be
                        removed*
                      </li>
                      <li>
                        *Pls Your buiness informations must be attached to your
                        card or flyer *
                      </li>
                    </ul>
                  </p>
                  <form onSubmit={submitHandler}>
                    <div className="col-md-6 mb-4">
                      <TextField
                        className="input-label-input-divs"
                        required
                        id="outlined-required"
                        type="file"
                        multiple
                        accept=".jpeg, .png, .jpg, "
                        onChange={(e) => uploadimage(e)}
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
                        Create Advert
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
    </UserLayout>
  );
};

export default UserCreateBusinessAdvert;
