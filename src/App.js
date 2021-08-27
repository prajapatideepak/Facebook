/** @format */

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Feed from "./layout/Feed";

function App() {
  return (
    <Router>
      <Feed />
    </Router>
  );
}

export default App;
