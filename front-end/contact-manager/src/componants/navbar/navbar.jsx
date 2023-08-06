import React from "react";
import "./style.css";

const Navbar = (signed) => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src="../../asset/address-book.png" alt="Logo" class="logo"/>
        </div>
        <ul className="nav-list">
            <li><a href="/contacts">Contacts</a></li>
            <li><a href="/create-contact">New</a></li>
            <li><a href="/map">Map</a></li>
        </ul>
    </div>
  );
};

export default Navbar;