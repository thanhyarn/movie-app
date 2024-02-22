import React, { useState } from "react";
import logo from "../../logo.png";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShow(!show);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <button onClick={toggleMenu} className="menu-button">
        {isOpen ? <IoClose /> : <FaBars />}
      </button>
      <ul id="navbar" className={`navbar ${!show ? "active" : ""}`}>
        <li>Popular</li>
        <li>Now Playing</li>
        <li>Upcoming</li>
        <li>Top Rated</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <FaSearch />
      </div>

      {theme == "light" ? (
        <MdDarkMode className="toggle-icon" onClick={() => setTheme("dark")} />
      ) : (
        <CiLight className="toggle-icon" onClick={() => setTheme("light")} />
      )}

      <div id="mobile">
        {show ? (
          <FaTimes className="icon-navbar navbar active" />
        ) : (
          <FaBars className="icon-navbar navbar" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
