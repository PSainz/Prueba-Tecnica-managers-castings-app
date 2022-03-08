import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Navbar from "./../Navbar/Navbar.jsx";

function Home() {
  return (
    <div>
      HOLI
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contestants">Contestants</Link>
        </li>
        <li>
          <Link to="/create-contestant">Create Contestant</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
