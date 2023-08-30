// Programs.js
import farmImg from "../Images/farm1.png";
import techImg from "../Images/tch2.png";
import dev from "../Images/dev1.png";

import "./Programs.css";

function Program() {
  return (
    <div className="programs">
      <h1>Developmental Programs</h1>
      <div className="media">
        <div className="container">
          <div className="programdesc">
            <h2>Agriculture Modernization </h2>
            <p>
              Welcome to Cultivating Prosperity, a transformative agricultural
              modernization program designed to revolutionize farming practices
              and empower local farmers in our community. In collaboration with
              Niberfoundation, our program aims to enhance agricultural
              productivity, sustainability, and profitability. Through our
              initiatives, we strive to promote innovation, provide training and
              resources, and create a thriving agricultural sector that
              contributes to the overall development and prosperity of our
              community.
            </p>
          </div>
          <div className="program-image">
            <img src={farmImg} alt="" />
          </div>
        </div>

        <div className="container">
          <div className="program-image">
            <img src={dev} alt="" className="devimg" />
          </div>
          <div className="programdesc">
            <h2>Job Training</h2>
            <p>
              Welcome to Empowering Futures, a comprehensive job training
              program designed to equip individuals in our community with the
              necessary skills and knowledge to thrive in the modern job market.
              In collaboration withNiber foundation, our program aims to bridge
              the gap between education and employment by providing practical
              training, mentorship, and support to individuals seeking to
              enhance their employability and secure sustainable livelihoods.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="programdesc">
            <h2>Education</h2>
            <p>
              Welcome to Empowering Minds, a comprehensive educational
              assistance program designed to uplift and empower individuals in
              our local community. Our program, implemented in collaboration
              with Niber foundation, aims to provide educational support and
              resources to individuals of all ages, ensuring equal access to
              quality education. Through our initiatives, we strive to foster a
              love for learning, promote academic excellence, and create a
              brighter future for our community.
            </p>
          </div>
          <div className="program-image">
            <img src={techImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
