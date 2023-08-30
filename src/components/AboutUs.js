// AboutPage.js
import "./AboutUs.css";
import { Link } from "react-router-dom";
import mess1 from "../Images/mess1.png";

function AboutUs() {
  return (
    <div className="about">
      <div>
        <h1>About Us</h1>
        <p>
          <span>Welcome to Niber Foundation,</span> a dedicated and passionate
          group of individuals committed to rebuilding and revitalizing war-torn
          regions, both economically and politically. Our organization firmly
          believes in the power of sustainable development and social
          empowerment to create lasting change in communities affected by
          conflict. At Niber Foundation, we understand the devastating impact of
          war on societies, leaving behind shattered infrastructure, displaced
          populations, and fractured economies. Our mission is to bring hope,
          stability, and progress to these regions by implementing innovative
          and impactful initiatives. Economic Empowerment: We strongly believe
          that economic stability is the cornerstone of rebuilding communities.
          Through our various programs and projects, we strive to create
          sustainable livelihood opportunities for individuals affected by war.
          By providing vocational training, microfinance support, and
          entrepreneurship development, we aim to empower individuals to become
          self-reliant and contribute to the economic growth of their
          communities. Political Engagement: We recognize the significance of
          political stability and good governance in post-conflict regions. Our
          organization works closely with local governments, community leaders,
          and civil society organizations to promote inclusive and transparent
          governance systems. Through advocacy, capacity-building workshops, and
          civic engagement initiatives, we aim to foster a culture of
          accountability and participation, ensuring that the voices of the
          marginalized are heard and represented.
        </p>
      </div>
      <h2>Message from NIBER Community</h2>
      <div className="messcontainer">
        <div className="messimgco">
          <img src={mess1} alt="" className="mesimg" />
        </div>
        <div>
          <p>
            Brothers and siters in Tigray, We want you to know that our heart
            goes out to each and every one of you during these incredibly
            challenging times. The struggles you face on a daily basis are
            unimaginable, and the impact of war on your lives is deeply
            saddening. Please remember that you are not alone in this journey.
            The world may seem distant, but there are countless individuals who
            care about your well-being and long for peace and stability in your
            Tigray. We stand with you in solidarity, hoping for brighter days
            ahead. We understand that the challenges you face are multifaceted.
            The destruction of infrastructure, loss of loved ones, lack of basic
            necessities, and the emotional scars left by war are overwhelming.
            But even amidst the darkest times, there is always a glimmer of
            hope. You possess an incredible strength and resilience that
            inspires us all. Your determination to rebuild, to heal, and to
            create a better future is truly commendable. Remember to lean on one
            another, to support and uplift each other, together we are stronger.
            While we may not be able to fully understand the depths of your
            experiences, We want you to know that we are here to listen, to
            offer support, and to amplify your voices. Your stories, your
            struggles, and your dreams matter. We must never lose sight of the
            importance of empathy, compassion, and understanding. We
            passionately hope that stability will find its way to Tigray soon,
            bringing an end to the suffering and paving the way for healing and
            reconciliation. Until we meet, please know that you are not
            forgotten. You are in our thoughts, our prayers, and our hearts.
            With heartfelt warmth and unwavering empathy, NIBER Community
          </p>
        </div>
      </div>
      <div className="planco">
        <div className="planco2">
          <h2>Purpose & Goal Statement</h2>

          <p>
            Providing empowering assistance that is suitable and fitting to the
            very nature of a resilient community. By creating job opportunity,
            financial assistance to start business, training and creating a
            conducive market place to trade in, which is supported by states of
            the art technology.
          </p>

          <h2>Our commitment</h2>

          <p>
            Starting from a humble shop we have grown to be one of the largest
            business conglomerates in the nation. Throughout our journey and
            success one thing that sets us apart from others is our commitment
            to our partners and customers. We plan to apply the same commitment
            to this noble undertaking. Furthermore, we are the sons and
            daughters of the very community that we plan to serve and we share
            the pain and joy when we succeed.
          </p>
        </div>
        <div className="planco1">
          <h2>Vision</h2>

          <p>
            To be a economically strong socially stable <br />
            region by creating 100 thousand entrepreneurs <br />
            and 1.5 million employees By 2032
          </p>

          <h2>Values</h2>

          <p>
            Innovation | Social responsibility & Moral
            <br />
            | Quality | Excellence <br />
            Team work & Partnership | Trust
          </p>
        </div>
      </div>

      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default AboutUs;
