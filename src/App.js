import React from "react";
import Nav from "./Navbar";
import Container from "./Container";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
    </Router>
  );
}

export default App;
