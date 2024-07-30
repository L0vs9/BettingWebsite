// src/App.js
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
      <div className="App">
        <Routes>
          <Route path="/" element={<Zenden />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ev" element={<Ev />} />
          <Route path="/ac" element={<Ac />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
