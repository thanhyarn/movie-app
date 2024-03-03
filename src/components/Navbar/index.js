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
    <div className="header">
      <div className="container">
        <NavLink to={"/"}>
          <img src={logo} />
        </NavLink>
        <div className="header-actions">
          <button className="search-btn">
            <FaSearch />
          </button>
          <button class="btn btn-primary">Wishlist</button>
        </div>
        <button class="menu-open-btn" data-menu-open-btn>
          <FaBars />
        </button>
        <nav className="navbar">
          <div className="navbar-top">
            <a href="./index.html" class="logo">
              <img src="./assets/images/logo.svg" alt="Filmlane logo" />
            </a>

            <button class="menu-close-btn" data-menu-close-btn>
              <FaTimes />
            </button>
          </div>
          <ul class="navbar-list">
            <li>
              <a href="./index.html" class="navbar-link">
                Home
              </a>
            </li>

            <li>
              <a href="#" class="navbar-link">
                Movie
              </a>
            </li>

            <li>
              <a href="#" class="navbar-link">
                Tv Show
              </a>
            </li>

            <li>
              <a href="#" class="navbar-link">
                Web Series
              </a>
            </li>

            <li>
              <a href="#" class="navbar-link">
                Pricing
              </a>
            </li>
          </ul>
          <ul class="navbar-social-list">
            <li>
              <a href="#" class="navbar-social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="navbar-social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="navbar-social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="navbar-social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="navbar-social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
