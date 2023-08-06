import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src="../../asset/address-book.png" alt="Logo" class="logo"/>
        </div>
        <ul className="nav-list">
            <li><Link to="/">Contacts</Link></li>
            <li><Link to="/create-contact">New</Link></li>
            <li><Link to="/map">Map</Link></li>
        </ul>
    </div>
  );
};

export default Navbar;