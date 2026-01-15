import "./hero.css";
import teacherImg from "../../assets/teacher2.png";
import PartnerForm from "./PartnerForm";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-text-content">
              <h1 className="hero-title">
                India's First International Preschool <br />
                for <span>Confident Global Citizens</span>
              </h1>

              <p className="hero-subtitle">
                Where Little Voices Grow into Powerful Futures
              </p>
            </div>

            <div className="teacher-wrapper">
              <img
                src={teacherImg}
                alt="Teacher with students"
                className="hero-image"
              />
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-end">
            <PartnerForm />
          </div>
        </div>
      </div>

      {/* Yellow Strip - Updated to match image */}
      <div className="yellow-strip-container">
        <div className="yellow-strip">
          <div className="container">
            <ul className="strip-items">
              <li>Financial Literacy</li>
              <li className="dot-separator">•</li>
              <li>Maths</li>
              <li className="dot-separator">•</li>
              <li>Personality Development</li>
              <li className="dot-separator">•</li>
              <li>Confidence Building</li>
              <li className="dot-separator">•</li>
              <li>Public Speaking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;