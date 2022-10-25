import Navbar from "./components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const App = () => {
  const [blogs, setBlogs] = useState([]);
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

  const confirmDel = (slug) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //alert(slug)
        delBlog(slug)
      }
    });
  };

  const delBlog =(slug)=>{
    axios.delete(`${process.env.REACT_APP_API}/blog/${slug}`)
    .then(response=>{
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      fetchData()
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
      <Navbar />
      <div className="container p-5">
        <div className="p-5">
          <a className="btn btn-secondary" href="/create">
            Create Content
          </a>
        </div>

        {blogs.map((blog, index) => (
          <div
            className="row"
            key={index}
            style={{ borderBottom: "1px solid" }}
          >
            <div className="col pt-3 pb-2">
              <Link to={`/blog/${blog.slug}`}>
                <h5>{blog.title}</h5>
              </Link>
              <p>{blog.content.substring(0, 180)}</p>
              <p className="text-muted">
                ผู้เขียน :{blog.author} , เผยแพร่ :
                {new Date(blog.createdAt).toLocaleString()}
              </p>
              <Link to={`/blog/edit/${blog.slug}`} className=" btn btn-info btn-sm ">UPDATE</Link>
              <button
                className=" btn btn-danger btn-sm"
                onClick={() => confirmDel(blog.slug)}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default App;
