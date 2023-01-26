import React, { useEffect, useState, useRef } from "react";

import Modal from "react-bootstrap/Modal";

import Loader from "../../components/Loading/Loader";
import "./BroadcastNews.css";
import axios from "axios";
import Message from "../../components/Message/Message";
import NavBar from "../../components/Header/NavBar";
import Footer from "../../components/footer/Footer";
import { Button, Card } from "react-bootstrap";
const Broadcast = (props) => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [poster, setPoster] = useState([]);

  const handleClose = () => {
    setModal(false);
  };
  const [show, setShow] = useState(false);

  const handlesClose = () => setShow(false);
  const handlesShow = () => setShow(true);

  // const click = () => {
  //   setModal(!modal);
  // };

  useEffect(() => {
    setModal(!modal);
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://sfcoba.herokuapp.com/api/announcement/"
      );
      console.log(data);
      setPoster(data);
      setLoading(false);
      setError(false);

      // localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <NavBar />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">Failed</Message>
      ) : (
        <div className="disp-broad">
          {poster?.map((val) => (
            <>
              <Card
                className="text-center "
                style={{ width: "400px", marginBottom: "30px" }}
              >
                <Card.Body>
                  <Card.Title style={{ fontWeight: "600", fontSize: "25px" }}>
                    {val.caption}{" "}
                  </Card.Title>
                  <Card.Text>{val.content}</Card.Text>
                  <Button style={{ background: "#0000CD" }}>
                    Important Notice!!
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted">few days ago</Card.Footer>
              </Card>
            </>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Broadcast;
