import React, { useState } from "react";
import logo from "../../logo.png";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShow(!show);
  };

  const handleEnter = async (event) => {
    if (event.key === "Enter") {
      window.location.href = `/search?query=${searchValue}`;
    }
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <button onClick={toggleMenu} className="menu-button">
        {isOpen ? <IoClose /> : <FaBars />}
      </button>
      <ul id="navbar" className={`navbar ${!show ? "active" : ""}`}>
        <li>
          <NavLink to="/popular">Popular</NavLink>
        </li>
        <li>
          <NavLink to="/now-playing">Now Playing</NavLink>
        </li>
        <li>
          <NavLink to="/upcoming">Upcoming</NavLink>
        </li>
        <li>
          <NavLink to="/top-rated">Top Rated</NavLink>
        </li>
      </ul>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleEnter}
        />
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
