import { Form, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const SingleComponent = (props) => {
  const { slug } = useParams();
  const [blog, setBlog] = useState("");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/blog/${slug}`)
      .then((respone) => {
        setBlog(respone.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container p-5">
        <h5>{blog.title}</h5>
        <p>{blog.content}</p>
        <p className="text-muted">
          ผู้เขียน :{blog.author} , เผยแพร่ :
          {new Date(blog.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default SingleComponent;
