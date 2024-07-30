import React from "react";
import "./App.css";
import Zenden from "./Zenden";
import Dashboard from "./Dashboard";
import Ev from "./Ev";
import Ac from "./Ac";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Zenden />
    </div>
  );
}

export default App;
