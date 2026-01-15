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
              India’s First International Preschool <br />
              for <span>Confident Global Citizens</span>
            </h1>

            <p className="hero-subtitle">
              Where Little Voices Grow into Powerful Futures
            </p>

            <div className="teacher-wrapper">
              <img
                src={teacherImg}
                alt="Teacher"
                className="hero-image"
              />
              
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-end">
            <div className="form-wrapper">

             
<div className="form-header text-center">
  <span className="franchise-pill">
    Franchise Opportunity
  </span>

  <h2 className="form-title">
    Partner with Us
  </h2>

  <p className="form-subtitle">
    Start your journey with India's leading preschool network.
  </p>
</div>


              <div className="hero-form-card">
                <PartnerForm />
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="yellow-strip">
        <div className="container">
          <ul>
            <li>Financial Literacy</li>
            <li>Maths</li>
            <li>Personality Development</li>
            <li>Confidence Building</li>
            <li>Public Speaking</li>
          </ul>
        </div>
      </div>

      {/* SLANTED YELLOW STRIP */}
{/* <div className="slanted-strip">
  <div className="strip-inner container">
    <span>Financial Literacy</span>
    <span className="dot"></span>
    <span>Maths</span>
    <span className="dot"></span>
    <span>Personality Development</span>
    <span className="dot"></span>
    <span>Confidence Building</span>
    <span className="dot"></span>
    <span>Public Speaking</span>
  </div>
</div> */}


    </section>
  );
};

export default Hero;
