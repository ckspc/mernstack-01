import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import FromComponent from "./components/FormComponent";
import LoginComponent from "./components/LoginComponent";
import SingleComponent from "./components/SingleComponent";
import UpdateComponent from "./components/UpdateComponent";


const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<FromComponent/>}></Route>
        <Route path="/blog/:slug" element={<SingleComponent/>}></Route>
        <Route path="/blog/edit/:slug" element={<UpdateComponent/>}></Route>
        <Route path="/login" element={<LoginComponent/>}></Route>
      </Routes>
    </Router>
  );
};

export default MyRoute;
