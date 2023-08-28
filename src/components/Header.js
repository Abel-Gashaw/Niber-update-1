// Header.js
import "./Header.css";
import { Link } from "react-router-dom";
import nberlogo from "../Images/niber-logo.png";
import { FaChevronDown, FaHandHoldingHeart, FaToolbox } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={nberlogo} alt="" className="logo" />
        </Link>
      </div>

      <nav>
        {open && (
          <ul className="navbar-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <ul className="Menu">
              <li>
                <a>
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
            {/* <li>
            <Link to="/programs">programs</Link>
           </li> */}

            <li>
              <Link to="/donate">Donate</Link>
            </li>
            <li>
              <Link to="/LoginPage">Subscribe</Link>
            </li>
          </ul>
        )}
        <button onClick={() => setOpen(!open)} className="humbtn">
          <FaBars />
        </button>
      </nav>
    </header>
  );
}

export default Header;
