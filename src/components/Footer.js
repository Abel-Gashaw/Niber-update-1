// Footer.js

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Programs</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-info">
          <h3>Info</h3>
          <p>Niber Org</p>
          <p>123 Main St</p>
          <p>Mekelle, Tigray</p>
        </div>

        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <p className="copyright">&copy; 2023 Nonprofit</p>
    </footer>
  );
}
