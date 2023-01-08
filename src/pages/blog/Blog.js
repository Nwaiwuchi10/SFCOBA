import React, { useEffect, useState } from "react";
import axios from "axios";
// import { blog } from "../../dummydata";
import "./Blog.css";
const Blog = () => {
  const [poster, setPoster] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/posts/");
      console.log(data);
      setPoster(data);
      // setLoading(false);
      // setError(false);

      // localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, []);
  return (
    <div className="f-blog">
      <section className="blog">
        <div className="container">
          {/* <Heading subtitle='OUR BLOG' title='Recent From Blog' /> */}
          <div className="text-center ht">Our Event Blogs</div>
          <div className="grid2">
            {/* {poster.slice(0, 3).map((val) => ( */}
            {poster?.map((val) => (
              <div className="items shadow">
                <div className="img">
                  <img src={val.image} alt="" />
                </div>
                <div className="text">
                  <h1>{val.title}</h1>
                  <p>{val.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;