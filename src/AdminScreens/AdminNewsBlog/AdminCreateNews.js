import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AdminLayout from "../AdminDashboard/AdminLayout";
import "./AdminCreateProject.css";
const AdminCreateNews = () => {
  return (
    <AdminLayout>
      <section>
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style={{ borderRadius: "15px" }}>
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">
                      Create a News Blog
                    </h2>

                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <Box
                            // component="form"
                            sx={{
                              "& .MuiTextField-root": { m: 1, width: "26ch " },
                            }}
                            noValidate
                            autoComplete="off"
                          >
                            <TextField
                              required
                              id="outlined-required"
                              label="Email "
                              type="email"
                              // value={email}
                              // onChange={(e) => setEmail(e.target.value)}

                              //   defaultValue="Match Day"
                            />
                          </Box>
                        </div>
                        <div className="col-md-6 mb-4">
                          <Box
                            // component="form"
                            sx={{
                              "& .MuiTextField-root": { m: 1, width: "26ch " },
                            }}
                            noValidate
                            autoComplete="off"
                          >
                            <TextField
                              required
                              id="outlined-required"
                              label="Email "
                              type="email"
                              // value={email}
                              // onChange={(e) => setEmail(e.target.value)}

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
                              "& .MuiTextField-root": { m: 1, width: "26ch " },
                            }}
                            noValidate
                            autoComplete="off"
                          >
                            <TextField
                              required
                              id="outlined-required"
                              label="Email "
                              type="email"
                              // value={email}
                              // onChange={(e) => setEmail(e.target.value)}

                              //   defaultValue="Match Day"
                            />
                          </Box>
                        </div>
                        <div className="col-md-6 mb-4">
                          <Box
                            // component="form"
                            sx={{
                              "& .MuiTextField-root": { m: 1, width: "26ch " },
                            }}
                            noValidate
                            autoComplete="off"
                          >
                            <TextField
                              required
                              id="outlined-required"
                              label="Email "
                              type="email"
                              // value={email}
                              // onChange={(e) => setEmail(e.target.value)}

                              //   defaultValue="Match Day"
                            />
                          </Box>
                        </div>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          type="button"
                          class="btn btn-success btn-block btn-lg "
                          style={{ background: "#0000CD" }}
                        >
                          Register
                        </button>
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

export default AdminCreateNews;
