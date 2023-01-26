import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { FaEdit, FaRegTimesCircle, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loading/Loader";
import Message from "../../components/Message/Message";
import CircularIndeterminate from "../../components/Loading/Progress";
import AdminLayout from "../AdminDashboard/AdminLayout";
import "../AdminNewsBlog/AdminViewNews.css";
const AdminViewProjects = () => {
  const id = useParams();
  const navigate = useNavigate();
  const [poster, setPoster] = useState([]);
  const [spanish, setSpanish] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [show, setShow] = useState(false);
  const [loadings, setLoadings] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://sfcoba.herokuapp.com/api/projects"
      );
      console.log(data);
      setPoster(data);
      setLoading(false);
      setError(false);

      localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);

  const postDelete = (id, e) => {
    e.preventDefault();
    setLoadings(true);
    axios
      .delete(`https://sfcoba.herokuapp.com/api/projects/delete/${id}`)

      .then((res) => {
        setLoadings(false);
        console.log("Deleted!!!", res);
        // alert("Item has been removed");
        navigate("/ViewProjects");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to remove");
      });
  };

  return (
    <AdminLayout>
      <h3 className="text-center mb-4 mt-4">
        View All {poster.length} Project Blogs{" "}
      </h3>
      <section class="intro">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <table class="table">
            <thead>
              <tr>
                <th>IMAGE</th>
                <th>PROJECT TITLE</th>
                <th>PROJECT DONE BY </th>
                <th>CONTENT</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {poster?.map((usery) => (
                <>
                  <tr key={usery._id}>
                    <td data-label="S.Img">
                      <img
                        src={usery?.image}
                        alt="jj"
                        style={{
                          width: "80px",
                          height: "8vh",
                          objectFit: "contain",
                        }}
                      />
                    </td>

                    <td data-label="S.Caption">{usery?.projectTitle}</td>
                    <td data-label="S.By">{usery?.classOf}</td>
                    <td data-label="S.Content"> {usery.content}</td>

                    <td data-label="S.edith/delete">
                      <Link to={`/edithProjectBlog/${usery._id}`}>
                        <Button variant="light" className="btn-sm">
                          <FaEdit />
                        </Button>
                      </Link>
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
                            Do you really want to delete these records? This
                            process cannot be undone.
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
                          <Button variant="secondary" onClick={handleClose}>
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
                </>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </AdminLayout>
  );
};

export default AdminViewProjects;
