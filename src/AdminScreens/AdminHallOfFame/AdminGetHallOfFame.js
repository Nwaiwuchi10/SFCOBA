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
const AdminGetHallOfFame = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
        "https://sfcoba.herokuapp.com/api/hallfame"
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
      <h3 className="text-center mb-4 mt-4">
        View All {poster.length} Hall Of Fame Blogs{" "}
      </h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <table class="table">
          <thead>
            <tr>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>CLASS OF</th>
              <th>SIGNIFICANT CONTRIBUTION</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {poster?.map((usery) => (
              <>
                <tr key={usery._id}>
                  <td data-label="S.img">
                    <img
                      src={usery?.imagePortrait}
                      alt="jj"
                      style={{
                        width: "80px",
                        height: "8vh",
                        objectFit: "contain",
                      }}
                    />
                  </td>

                  <td data-label="S.Name">{usery?.name}</td>

                  <td data-label="S.Set"> {usery.yearofGraduation}</td>
                  <td data-label="S.Content">
                    {" "}
                    {usery.significantContribution}
                  </td>
                  <td data-label="S.edith/delete">
                    <Link to={`/edithHallOfFame/${usery._id}`}>
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
    </AdminLayout>
  );
};

export default AdminGetHallOfFame;
