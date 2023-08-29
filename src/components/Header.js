// Header.js
import "./Header.css";
import { Link } from "react-router-dom";
import nberlogo from "../Images/niber-logo.png";
import { FaChevronDown, FaHandHoldingHeart, FaToolbox } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={nberlogo} alt="" className="logo" />
        </Link>
      </div>

      <nav>
        <ul className="navbar-links">
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
      </nav>
    </header>
  );
}

export default Header;
