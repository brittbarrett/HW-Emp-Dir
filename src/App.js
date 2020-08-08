import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
    </div>
  );
}

export default App;
