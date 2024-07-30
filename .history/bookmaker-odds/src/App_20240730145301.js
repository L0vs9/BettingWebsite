import React from "react";
import "./App.css";
import Zenden from "./Zenden";
import Dashboard from "./Dashboard";
import Ev from "./Ev";
import Ac from "./Ac";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <div className="App">
          <Route path="/">
            <Zenden />
          </Route>
        </div>
      </Routes>
    </Router>
  );
}

export default App;
