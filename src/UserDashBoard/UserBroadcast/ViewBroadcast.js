import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loading/Loader";
import UserLayout from "../UserDashLayout/UserLayout";

const ViewBroadcast = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  const [poster, setPoster] = useState([]);

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
    <UserLayout>
      <h3 className="text-center mt-4 mb-4">Public Announcements</h3>
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
    </UserLayout>
  );
};

export default ViewBroadcast;
