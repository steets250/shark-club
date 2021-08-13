import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./routes/Home/Home";
import Initiation from "./routes/Initiation/Initiation";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/initiation">
            <Initiation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}