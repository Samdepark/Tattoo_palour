import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="nav">
      <h1>Logo</h1>
      <nav className="lnks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/booking">Booking</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
