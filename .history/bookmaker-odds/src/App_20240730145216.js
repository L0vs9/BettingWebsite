import React from "react";
import "./App.css";
import Zenden from "./Zenden";
import Dashboard from "./Dashboard";
import Ev from "./Ev";
import Ac from "./Ac";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/">
            <Zenden />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
