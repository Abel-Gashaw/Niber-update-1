// Header.js
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>
        <Link to="/">Niber Foundation</Link>
      </h1>

      <nav>
        <ul>
          <li>{/* <Link to="/">Home</Link> */}</li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/programs">programs</Link>
          </li>
          <li>
            <Link to="/donate">donate</Link>
          </li>
          <li>
            <Link to="/LoginPage">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
