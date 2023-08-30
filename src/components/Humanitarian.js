// Humanitarian.js
import "./humanitarian.css";
import work from "../Images/work3.png";
import med1 from "../Images/med1.png";
import food1 from "../Images/food1.png";

export default function Humanitarian() {
  return (
    <div className="humanitarian">
      {/* Header Image */}
      <header className="page-header">
        <h1>Humanitarian Programs</h1>
      </header>

      {/* Food Assistance Section */}
      <h2 className="h2">
        {" "}
        <span>Nourishing Communities:</span>
        <br /> Niber foundation Food Assistance Program
      </h2>
      <section>
        <div className="img-container">
          <img src={food1} alt="" />
        </div>
        <div className="detailcontainer">
          <h2>Food Assistance</h2>
          <p>
            Niber foundation Food Assistance Program is a shining example of how
            a community can come together to address the pressing issue of food
            insecurity. With their commitment to providing access to fresh,
            nutritious food, coupled with educational opportunities and
            sustainable initiatives, they are not only alleviating immediate
            hunger but also empowering individuals and families to break the
            cycle of food insecurity. Through their tireless efforts, they are
            nourishing communities and fostering a brighter, healthier future
            for all.
          </p>
        </div>
      </section>

      {/* Medical Assistance Section */}
      <h2 className="h2">
        {" "}
        <span>Healing Hands:</span>
        <br /> Enhancing Healthcare Access through a Niberfoundation Medical
        Assistance Program
      </h2>
      <section className="medsec-co">
        <div className="med1img-co">
          <img src={med1} alt="" className="med1img" />
        </div>
        <div className="meddesc-co">
          <h2>Medical Assistance</h2>
          <p>
            Nber foundation Medical Assistance Program is a beacon of hope for
            individuals and families who face barriers in accessing quality
            healthcare. Through its focus on affordable services, a robust
            referral network, prescription medication assistance, health
            education, and mental health support, the program is transforming
            lives and restoring dignity to those in need. By addressing the
            healthcare gap, the organization is paving the way for a healthier
            and more equitable society, where everyone has the opportunity to
            thrive.
          </p>
        </div>
      </section>
      <h2 className="h2">
        {" "}
        <span>Empowering Minds:</span>
        <br /> Niber foundation Educational Assistance Program
      </h2>
      <section className="medsec-co">
        <div className="med1img-co">
          <img src={work} alt="" className="med1img" />
        </div>
        <div className="meddesc-co">
          <h2>Educational Assistance</h2>
          <p>
            Empowering Minds is committed to transforming lives through
            education. We firmly believe that education is a powerful tool for
            personal growth, social mobility, and community development. By
            providing scholarships, mentoring, skill development workshops,
            career counseling, and a resource center, we aim to create a
            supportive educational ecosystem that empowers individuals to
            overcome obstacles and achieve their dreams. Together, let's build a
            brighter future for our community through education. Join us in our
            mission to empower minds and transform lives.
          </p>
        </div>
      </section>
    </div>
  );
}
