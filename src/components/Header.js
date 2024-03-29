// Header.js
import "./Header.css";
import { Link } from "react-router-dom";
import nberlogo from "../Images/niber-logo.png";
import {
  FaChevronDown,
  FaHandHoldingHeart,
  FaToolbox,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

function Header() {
  // const [open, setOpen] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={nberlogo} alt="" className="logo" />
        </Link>
      </div>

      <nav className="nav">
        {/* <button onClick={() => setOpen(!open)} className="fa-bars">
          <FaBars />
        </button>
        {open && ( */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={showMenu ? <FaTimes /> : <FaBars />}></i>
        </div>
        <ul className={showMenu ? "menu active" : "menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <ul className="Menu">
            <li>
              <a href="#!">
                Programs
                <FaChevronDown className="fachek" />
              </a>

              <ul className="programs-submenu">
                <li>
                  <FaHandHoldingHeart />
                  <Link to="/humanitarian">Humanitarian</Link>
                </li>

                <li>
                  <FaToolbox />
                  <Link to="/programs">Development</Link>
                </li>
              </ul>
            </li>
          </ul>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/donate">Donate</Link>
          </li>
          <li>
            <Link to="/LoginPage">Subscribe</Link>
          </li>
        </ul>
        {/* )} */}
      </nav>
    </header>
  );
}

export default Header;
