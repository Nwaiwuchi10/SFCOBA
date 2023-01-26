import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { FaCheck, FaEdit, FaRegTimesCircle, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loading/Loader";
import Message from "../../components/Message/Message";
import CircularIndeterminate from "../../components/Loading/Progress";
import AdminLayout from "../AdminDashboard/AdminLayout";
import "../AdminNewsBlog/AdminViewNews.css";
import { TextField } from "@mui/material";
const ViewUsersWithRoles = () => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchTitle, setSearchTitle] = useState("");
  const [poster, setPoster] = useState([]);
  const [spanish, setSpanish] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [show, setShow] = useState(false);
  const [loadings, setLoadings] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const apiEndPoint = "https://sfcoba.herokuapp.com/api/hallfame/delete";
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://sfcoba.herokuapp.com/api/users"
      );
      console.log(data);
      setPoster(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);
  const handleDelete = async (usery) => {
    await axios.delete(apiEndPoint + "/" + usery._id);
    setPoster(poster.filter((p) => p._id !== usery._id));
  };

  const postDelete = (usery, e) => {
    e.preventDefault();
    setLoadings(true);
    axios
      .delete(`https://sfcoba.herokuapp.com/api/hallfame/delete/${usery?._id}`)

      .then((res) => {
        setLoadings(false);
        console.log("Deleted!!!", res);
        // alert("Item has been removed");
        navigate("/ViewHallOfFame");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to remove");
      });
  };

  return (
    <AdminLayout>
      <h3 className="text-center mb-4 mt-4">VIEW All SFCOBA USER ROLES </h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <div className="col-md-12 pt-4 mb-4">
            <TextField
              className="input-label-input-divs"
              id="outlined-required"
              label="Search by Name "
              type="text"
              onChange={(e) => setSearchTitle(e.target.value)}

              //   defaultValue="Match Day"
            />
          </div>

          {poster
            ?.filter((value) => {
              if (searchTitle === "") {
                return value;
              } else if (
                value.firstName
                  .toLowerCase()
                  .includes(searchTitle.toLowerCase())
              ) {
                return value;
              }
            })
            .map((usery) => (
              <div>
                {searchTitle ? (
                  <>
                    {usery.roles === "Member" ? null : (
                      <>
                        <table class="table">
                          <thead>
                            <tr>
                              <th>IMAGE</th>
                              <th>FIRST NAME</th>
                              <th>LAST NAME</th>
                              <th>CHAPTER</th>
                              <th>USER ROLE</th>
                              <th>YEAR OF GRADUATION</th>
                              <th>OCCUPATION</th>
                              <th>MAKE AN ADMIN</th>
                              <th>ASSIGN ROLE TO USER</th>
                              <th>DELETE USER</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr key={usery._id}>
                              <td data-label="S.img">
                                <img
                                  src={usery?.profilePic}
                                  alt="jj"
                                  style={{
                                    width: "80px",
                                    height: "8vh",
                                    objectFit: "contain",
                                  }}
                                />
                              </td>

                              <td data-label="S.Name">
                                <Link to={`/uerslinktree/${usery._id}`}>
                                  {usery?.firstName}
                                </Link>{" "}
                              </td>
                              <td data-label="S.Name">
                                {" "}
                                <Link to={`/uerslinktree/${usery._id}`}>
                                  {usery?.secondName}
                                </Link>
                              </td>
                              <td data-label="S.Chapter"> {usery.chapter}</td>
                              <td data-label="S.Roles"> {usery.roles}</td>
                              <td data-label="S.Set">
                                {" "}
                                {usery.yearOfGraduation}
                              </td>
                              <td data-label="S.Occupation">
                                {" "}
                                {usery.occupation}
                              </td>
                              {usery.isAdmin ? (
                                <td>
                                  {" "}
                                  <FaCheck style={{ color: "green" }} />
                                </td>
                              ) : (
                                <>
                                  <td data-label="S.Admin">
                                    <Link to={`/adminedit/${usery._id}`}>
                                      Make User an Admin
                                    </Link>
                                  </td>
                                </>
                              )}
                              <td data-label="S.Assign Role">
                                {" "}
                                <Link to={`/UserRoleAssign/${usery._id}`}>
                                  Assign Role to User
                                </Link>
                              </td>
                              <td data-label="S.Delete">
                                <Button
                                  variant="danger"
                                  className="btn-sm"
                                  onClick={handleShow}
                                >
                                  <FaTrash />
                                </Button>
                              </td>
                              <Modal
                                style={{
                                  marginTop: "50px",
                                }}
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                              >
                                <Modal.Header closeButton>
                                  <Modal.Title></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div
                                    style={{
                                      display: "block",
                                      justifyContent: "center",
                                      textAlign: "center",
                                    }}
                                  >
                                    <h3>Are you sure?</h3>
                                    <h5
                                      style={{
                                        color: "gray",
                                      }}
                                    >
                                      Do you really want to delete these
                                      records? This process cannot be undone.
                                    </h5>
                                  </div>
                                </Modal.Body>
                                <Modal.Footer>
                                  <div
                                    style={{
                                      display: "block",
                                      justifyContent: "center",
                                      textAlign: "center",
                                    }}
                                  >
                                    <Button
                                      variant="secondary"
                                      onClick={handleClose}
                                    >
                                      Close
                                    </Button>
                                    {loadings && <CircularIndeterminate />}
                                    <Button
                                      variant="danger"
                                      onClick={(e) => postDelete(usery._id, e)}
                                    >
                                      Delete
                                    </Button>
                                  </div>
                                </Modal.Footer>
                              </Modal>
                            </tr>
                          </tbody>
                        </table>
                      </>
                    )}
                    <hr />
                  </>
                ) : null}
              </div>
            ))}

          <br />
          <table class="table">
            <thead>
              <tr>
                <th>IMAGE</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>CHAPTER</th>
                <th>USER ROLE</th>
                <th>YEAR OF GRADUATION</th>
                <th>OCCUPATION</th>
                <th>MAKE AN ADMIN</th>
                <th>ASSIGN ROLE TO USER</th>
                <th>DELETE USER</th>
              </tr>
            </thead>
            <tbody>
              {poster
                ?.sort(function (a, b) {
                  if (a.roles < b.roles) {
                    return -1;
                  }
                  if (a.roles > b.roles) {
                    return 1;
                  }
                  return 0;
                })
                .map((usery) => (
                  <>
                    <tr key={usery._id}>
                      {usery.roles === "Member" ? null : (
                        <>
                          <td data-label="S.img">
                            <img
                              src={usery?.profilePic}
                              alt="jj"
                              style={{
                                width: "80px",
                                height: "8vh",
                                objectFit: "contain",
                              }}
                            />
                          </td>

                          <td data-label="S.Name">
                            <Link to={`/uerslinktree/${usery._id}`}>
                              {usery?.firstName}
                            </Link>{" "}
                          </td>
                          <td data-label="S.Name">
                            {" "}
                            <Link to={`/uerslinktree/${usery._id}`}>
                              {usery?.secondName}
                            </Link>
                          </td>
                          <td data-label="S.Chapter"> {usery.chapter}</td>
                          <td data-label="S.Roles"> {usery.roles}</td>
                          <td data-label="S.Set"> {usery.yearOfGraduation}</td>
                          <td data-label="S.Occupation"> {usery.occupation}</td>
                          {usery.isAdmin ? (
                            <td>
                              {" "}
                              <FaCheck style={{ color: "green" }} />
                            </td>
                          ) : (
                            <>
                              <td data-label="S.Admin">
                                <Link to={`/adminedit/${usery._id}`}>
                                  Make User an Admin
                                </Link>
                              </td>
                            </>
                          )}
                          <td data-label="S.Assign Role">
                            {" "}
                            <Link to={`/UserRoleAssign/${usery._id}`}>
                              Assign Role to User
                            </Link>
                          </td>
                          <td data-label="S.Delete">
                            <Button
                              variant="danger"
                              className="btn-sm"
                              onClick={handleShow}
                            >
                              <FaTrash />
                            </Button>
                          </td>
                          <Modal
                            style={{
                              marginTop: "50px",
                            }}
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <div
                                style={{
                                  display: "block",
                                  justifyContent: "center",
                                  textAlign: "center",
                                }}
                              >
                                <h3>Are you sure?</h3>
                                <h5
                                  style={{
                                    color: "gray",
                                  }}
                                >
                                  Do you really want to delete these records?
                                  This process cannot be undone.
                                </h5>
                              </div>
                            </Modal.Body>
                            <Modal.Footer>
                              <div
                                style={{
                                  display: "block",
                                  justifyContent: "center",
                                  textAlign: "center",
                                }}
                              >
                                <Button
                                  variant="secondary"
                                  onClick={handleClose}
                                >
                                  Close
                                </Button>
                                {loadings && <CircularIndeterminate />}
                                <Button
                                  variant="danger"
                                  onClick={(e) => postDelete(usery._id, e)}
                                >
                                  Delete
                                </Button>
                              </div>
                            </Modal.Footer>
                          </Modal>
                        </>
                      )}
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </>
      )}
    </AdminLayout>
  );
};

export default ViewUsersWithRoles;
