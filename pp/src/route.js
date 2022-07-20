import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";

const Routers = (props) => {
  console.log("ROUTERS loaded");

  return (
    <Router>

        <Route
          path="/home"
          render={() => <Home />}
        />
        <Route
        path="/"
        render={() => <Home />}
      />
        <Route
          path="/projects"
        />
        <Route
          path="/history"
        />
        <Route
          path="/resume"
        />
        <Route
          path="/contact"
        />
    </Router>
  );
};

export default Routers;