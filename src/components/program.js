// Programs.js
import farmImg from "../Images/farm1.png";
import techImg from "../Images/tch2.png";

import "./Programs.css";

function Program() {
  return (
    <div className="programs">
      <h1>Developmental Programs</h1>
      <div className="media">
        <div className="container">
          <div className="program">
            <h3>Agriculture Modernization </h3>
            <p>We provide meals and groceries for families in need.</p>
          </div>
          <div className="program-img">
            <img src={farmImg} alt="" />
          </div>
        </div>

        <div className="container">
          <div className="program-img">
            <img src={techImg} alt="" />
          </div>
          <div className="program">
            <h3>Job Training</h3>
            <p>We offer employment training and career advising.</p>
          </div>
        </div>

        <div className="container">
          <div className="program">
            <h3>Education</h3>
            <p>Our programs help at-risk youth excel in school.</p>
          </div>
          <div className="program-img">
            <img src={techImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
