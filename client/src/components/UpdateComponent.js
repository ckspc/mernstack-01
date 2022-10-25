import Navbar from "./Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { Form, useParams } from "react-router-dom";

const UpdateComponent = (props) => {
    console.log("props", props)
  const { slug, } = useParams();
  const [state, setState] = useState({
    title: "",
    content: "",
    author: "",
    slug: "",
  });

  const { title, content, author } = state;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/blog/${slug}`)
      .then((respone) => {
        console.log(respone.data)
        const { title, content, author } = respone.data;
        setState({...state, title, content, author, slug});
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(()=>{
    console.log("state", state)
  }, [state])

  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };
  const showUpdateForm = () => (
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
  );
  //กำหนดค่า state

    const submitFrom = (e) => {
      e.preventDefault();
      //console.table({ title, content, author });
      //console.log("API = ", process.env.REACT_APP_API);
      axios
        .put(`${process.env.REACT_APP_API}/blog/${slug}`, { title, content, author })
        .then((response) => {
          Swal.fire("Good job!", "Complete Update Content", "success");
          const {title,content,author,slug} = response.data
          setState({...state, title, content, author, slug})
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "มีชื่อนี้แล้ว",
          });
        });
    };
  return (
    <div className="">
      <Navbar />
      <div className="container p-5">
        <h1>Update Content</h1>
        {showUpdateForm()}
      </div>
    </div>
  );
};

export default UpdateComponent;
