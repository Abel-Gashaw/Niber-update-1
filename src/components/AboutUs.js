// AboutPage.js
import "./AboutUs.css";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about">
      <h1>About Us</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatum
        debitis explicabo consequatur, dolorum perspiciatis!
      </p>

      <h2>Our Mission</h2>

      <p>
        Laborum, possimus voluptas? Quia explicabo minus labore rerum
        praesentium modi velit?
      </p>

      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default AboutUs;
