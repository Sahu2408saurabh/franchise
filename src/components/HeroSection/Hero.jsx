import "./hero.css";
import teacherImg from "../../assets/teacher2.png";
import PartnerForm from "./PartnerForm";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="hero-title">
              India's First International Preschool <br />
              for <span>Confident Global Citizens</span>
            </h1>

            <p className="hero-subtitle">
              Where Little Voices Grow into Powerful Futures
            </p>

            <img
              src={teacherImg}
              alt="Teacher"
              className="hero-image"
            />
          </div>

          <div className="col-lg-6 d-flex justify-content-end">
            <PartnerForm />
          </div>
        </div>
      </div>

      
      <div className="strip-wrapper">
        <div className="strip-maroon"></div>

        <div className="strip-yellow">
          <ul className="strip-items">
            <li>Financial Literacy</li>
            <li className="dot">●</li>
            <li>Maths</li>
            <li className="dot">●</li>
            <li>Personality Development</li>
            <li className="dot">●</li>
            <li>Confidence Building</li>
            <li className="dot">●</li>
            <li>Public Speaking</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
