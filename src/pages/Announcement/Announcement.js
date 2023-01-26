import React, { useEffect, useState, useRef } from "react";

import Modal from "react-bootstrap/Modal";

import Loader from "../../components/Loading/Loader";
import "./BroadCast.css";
import axios from "axios";
import Message from "../../components/Message/Message";
const Announcement = (props) => {
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
    <div className="ance-div">
      <div>
        {/* <button onClick={(e) => downloads(e)}>download</button> */}
        {modal ? (
          <div>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">Failed</Message>
            ) : (
              <div>
                <div
                  className="modal show"
                  style={{ display: "block", position: "initial" }}
                >
                  {poster?.slice(0, 1).map((val) => (
                    <>
                      <Modal.Dialog>
                        <Modal.Header closeButton onClick={handleClose}>
                          <Modal.Title
                            style={{
                              width: "80%",
                              fontSize: "large",
                              fontWeight: "600",
                            }}
                          >
                            Special Announcement
                          </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                          <p>{val.caption}</p>
                        </Modal.Body>

                        <Modal.Footer>
                          <>
                            <p>{val.content} </p>
                          </>
                        </Modal.Footer>
                      </Modal.Dialog>
                    </>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Announcement;
