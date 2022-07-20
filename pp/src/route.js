import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Resume from "./components/Resume";
import History from "./components/History";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from './components/Nav';
import index from "./resources";


const Routers = (props) => {
  console.log("ROUTERS loaded");

  return (
    <>
      {/* <Nav /> */}
      <Router>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/projects"
          // element={<History />}
          />
          <Route
            path="/history"
          // element={<Projects />}
          />
          <Route
            path="/resume"
          // element={<Resume />}
            // element={window.location.href = index.info.resume}
          />
          <Route
            path="/contact"
          // element={<Contact />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default Routers;