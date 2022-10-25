import Navbar from "./Navbar";
import {useState} from "react";
const LoginComponent = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const { username, password } = state;
  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const submitFrom = (e) => {
    e.preventDefault();
    //console.table({ title, content, author });
    //console.log("API = ", process.env.REACT_APP_API);
    // axios
    //   .post(`${process.env.REACT_APP_API}/create`, { title, content, author })
    //   .then((response) => {
    //     Swal.fire("Good job!", "Complete Create Content", "success");
    //     setState({ ...state, title: "", content: "", author: "" });
    //   })
    //   .catch((err) => {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: "มีชื่อนี้แล้ว",
    //     });
    //   });
  };
  return (
    <div className="">
      <Navbar />
      <div className="container p-5">
        <h1>Login</h1>
        {/* {JSON.stringify(state)} */}
        <form onSubmit={submitFrom}>
          <div className="form-group">
            <label for="exampleFormControlInput1">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={inputValue("username")}
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={inputValue("password")}
            />
          </div>
          <br />
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
