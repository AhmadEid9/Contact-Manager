import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div class="navbar">
        <div class="logo">
            <img src="../../assets/address-book.png" alt="Logo" class="logo"/>
        </div>
        <ul class="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Categories</a></li>
        </ul>
        <div class="auth-links" id="auth-links">
            <a href="pages/register.html">Register</a>
            <a href="pages/signin.html">Sign In</a>
        </div>
    </div>
  );
};

export default Navbar;