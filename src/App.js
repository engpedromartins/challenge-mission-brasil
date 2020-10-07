import React from "react";
import "./App.css";
import { Router } from "react-router-dom";

import Routes from "./routes";
import history from "./utils/history";

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
