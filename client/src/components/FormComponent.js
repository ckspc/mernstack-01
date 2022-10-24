import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
const FromComponent = () => {
  const [state, setState] = useState({
    title: "",
    content: "",
    author: "",
  });

  const { title, content, author } = state;

  //กำหนดค่า state
  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };
  const submitFrom = (e) => {
    e.preventDefault();
    console.table({ title, content, author });
    console.log("API = ", process.env.REACT_APP_API);
    axios
      .post(`${process.env.REACT_APP_API}/create`, { title, content, author })
      .then((response) => {
        alert("Complete");
      })
      .catch((err) => {
        console.log(err.response.data.err);
      });
  };
  return (
    <div className="">
      <Navbar />
      <div className="container p-5">
        <h1>Create Content</h1>
        {JSON.stringify(state)}
        <form onSubmit={submitFrom}>
          <div className="form-group">
            <label for="exampleFormControlInput1">Name</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={inputValue("title")}
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Content</label>
            <textarea
              type="text"
              className="form-control"
              value={content}
              onChange={inputValue("content")}
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Author</label>
            <input
              type="text"
              className="form-control"
              value={author}
              onChange={inputValue("author")}
            />
          </div>
          <br />
          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default FromComponent;
