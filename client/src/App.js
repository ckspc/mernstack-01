import Navbar from "./components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
const App = () => {
  const [blogs, setBlogs] = useState();
  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/blogs`)
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container p-5">
        <h1>MERN STACK 101</h1>
        <div className="p-5">
          <a className="btn btn-secondary" href="/create">
            Create Content
          </a>
        </div>
        {blogs.map((blog, index) => (
          <div className="row" key={index} style={{borderBottom:'1px solid'}}>
            <div className="col pt-3 pb-2">
              <h5>{blog.title}</h5>
              <p>{blog.content}</p>
              <p className="text-muted">ผู้เขียน :{blog.author} , เผยแพร่ :{blog.createdAt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
