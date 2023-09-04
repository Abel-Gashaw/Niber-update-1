// Hero.js

import { Link } from "react-router-dom";
import "./Hero.css";
//import images from "../Images/food-program.jpg";
//import dev1 from "../Images/dev1.png";
import farm11 from "../Images/farm11.png";
import agri from "../Images/Agri.png";
import rural from "../Images/rural.png";
import youth from "../Images/youth.png";
import water from "../Images/water.png";
import school from "../Images/shool.png";
import sycho from "../Images/sycho.png";
import emer from "../Images/emer.png";
import consum from "../Images/consum.png";

import don2 from "../Images/hum1.png";
function Hero() {
  return (
    <>
      <div className="hero">
        <h1>Niber Foundation</h1>
        <p>Making a difference in our community</p>
        <Link to="/donate">
          <button>Donate Now</button>
        </Link>
      </div>
      <div>
        <h1>Programs</h1>
      </div>
      <div className="projectco">
        <div className="devco">
          <div>
            <h2>Developmental</h2>
          </div>
          <div className="prog">
            <p>
              Political strength emanates from strong economy. So, economic
              empowerment of Tegarus is a basis for all.
            </p>
            <div className="program-img">
              <img src={farm11} alt="" className="farmimg" />
            </div>
          </div>
        </div>
        <div className="humcon">
          <div>
            <h2>Humanitarian</h2>
          </div>
          <div className="prog">
            <p>
              Quick emergency relief need, with an intention of ‘no one will
              NEVER die due to post-war intervention failure’
            </p>
            <div className="program-img">
              <img src={don2} alt="" className="donimg" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Developmental Programs</h1>
      </div>
      <div className="progra">
        <div className="prog">
          <h3>Agriculture Modernization</h3>
          <p>
            Project Beneficiaries: - IDPs their children died during the war
            <br />
            Project Finance: - ETB 1 Billion
          </p>
          <div className="program-img">
            <img src={agri} alt="" />
          </div>
        </div>

        <div className="prog">
          <h3>Rural-youth empowerment</h3>
          <p>
            Project Beneficiaries:- Pilot farmers children <br />
            Project Finance:- ETB 1 Billion
          </p>
          <div className="program-img">
            <img src={rural} alt="" />
          </div>
        </div>

        <div className="prog">
          <h3>Youth vocational capacitating</h3>
          <p>
            Project Beneficiaries:- Unemployed urban youth <br />
            Project Finance:- ETB 1 Billion
          </p>
          <div className="program-img">
            <img src={youth} alt="" />
          </div>
        </div>
        <div className="prog">
          <h3>Water & domestic vegetation</h3>
          <p>
            Project Beneficiaries:- Rural community
            <br />
            Project Finance:- ETB 10 million
          </p>
          <div className="program-img">
            <img src={water} alt="" />
          </div>
        </div>
      </div>
      <div className="linkdiv">
        <Link to="/programs" className="btn">
          Read More
        </Link>
      </div>
      <div>
        <h1>Humanitarian Programs</h1>
      </div>
      <div className="progra">
        <div className="prog">
          <h3>School Renovation</h3>
          <p>
            Project Beneficiaries:- War-torn schools
            <br />
            Project Finance:- ETB 200 billion
          </p>

          <div className="program-img">
            <img src={school} alt="" />
          </div>
        </div>

        <div className="prog">
          <h3>Post-war psychosocial support</h3>
          <p>
            Project Beneficiaries:- All age women encountered GBV
            <br />
            Project Finance:- ETB 20 million{" "}
          </p>
          <div className="program-img">
            <img src={sycho} alt="" />
          </div>
        </div>

        <div className="prog">
          <h3>Emergency medical supply</h3>
          <p>
            Project Beneficiaries:- Veterans with disability
            <br />
            Project Finance:- ETB 100 million
          </p>
          <div className="program-img">
            <img src={emer} alt="" />
          </div>
        </div>
        <div className="prog">
          <h3>Consumables supply</h3>
          <p>
            Project Beneficiaries:- IDPs their children died during the war
            <br />
            Project Finance:- ETB 200 Billion
          </p>
          <div className="program-img">
            <img src={consum} alt="" />
          </div>
        </div>
      </div>
      <div className="linkdiv">
        <Link to="/humanitarian" className="btn">
          Read More
        </Link>
      </div>
    </>
  );
}

export default Hero;
