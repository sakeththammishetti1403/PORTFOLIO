import React from "react";

export default function Navbar() {
  return (
    <nav className="top-navbar">
      <div className="brand-logo">theblacksheep3.com</div>
      <div className="navbar-menu">
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
