// Footer.js

import { Link } from "react-router-dom";
import "./Footer.css";
import one from "../Images/1.png";
import two from "../Images/2.png";
import three from "../Images/3.png";
import four from "../Images/4.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <Link to="/">
              {" "}
              <li>Home</li>
            </Link>
            <Link to="/about">
              {" "}
              <li>About</li>
            </Link>
            <Link to="/programs">
              {" "}
              <li>Programs</li>
            </Link>
            <Link to="/donate">
              {" "}
              <li>Donate</li>
            </Link>
          </ul>
        </div>

        <div className="footer-info">
          <h3>Info</h3>
          <p>Niber Org</p>
          <p> adihaqi</p>
          <p>Mekelle, Tigray</p>
        </div>

        <div className="social-icons">
          <a href="https://www.youtube.com/@NiberFoundation">
            <i>
              <img src={four} alt="" />
            </i>
          </a>
          <a href="https://www.facebook.com/Niber.Foundation?mibextid=ZbWKwL">
            <i>
              <img src={one} alt="" />
            </i>
          </a>
          <a href="#">
            <i>
              <img src={two} alt="" />
            </i>
          </a>
          <a href="https://twitter.com/NiberFoundation?">
            <i>
              <img src={three} alt="" />
            </i>
          </a>
        </div>
      </div>

      <p className="copyright">&copy; 2023 Niber Foundation</p>
    </footer>
  );
}
