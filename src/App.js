import React from "react";
import "./style/common/layout.scss";
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
