import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container p-5">
        <h1>MERN STACK 101</h1>
        <a className="btn btn-secondary" href="/create">
          Create Content
        </a>
      </div>
    </div>
  );
};
export default App;
