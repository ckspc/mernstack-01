import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import FromComponent from "./components/FormComponent";

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<FromComponent/>}></Route>
      </Routes>
    </Router>
  );
};

export default MyRoute;
