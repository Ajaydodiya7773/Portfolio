import React from "react";
import './navbar.css';
import logo2 from "../../assets/logo2.png";
import contact from "../../assets/contact.png";

import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="Navbar">
      <img src={logo2} alt="Logo" className="logo" height="60px" width="60px" />
      <div className="desktopMenu">
        <Link className="desktopmenu">Home</Link>
        <Link className="desktopmenu">About</Link>
        <Link className="desktopmenu">Projects</Link>
        <Link className="desktopmenu">Portfolio</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src= {contact}alt="Contact" className="desktopMenuImg" /> ContactMe
      </button>
    </nav>
  );
};

export default Navbar;
