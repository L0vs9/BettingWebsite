import React from "react";
import "./App.css";
import Zenden from "./Zenden";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Zenden} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
