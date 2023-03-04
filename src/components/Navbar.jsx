import React from "react";
import { Link } from "react-router-dom";
import "./../Style/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>
          <i>SpaceX</i>
        </h2>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Services</Link>
        <Link to="/">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
