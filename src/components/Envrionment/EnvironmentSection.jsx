import React from "react";
import "./environmentSection.css";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";


const EnvironmentSection = () => {
  return (
    <section className="environment-section">
      <div className="container text-center text-white">

       
        <h2 className="env-title">
          A Safe, Loving & <br />
          <span>Inspiring Environment</span>
        </h2>

        <p className="env-desc">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
          Faucibus In Libero Risus Semper Habitant Arcu Eget.
        </p>

        {/* IMAGE GRID */}
        <div className="env-gallery">
          <img src={img1} className="img small" />
          <img src={img2} className="img small" />
          <img src={img3} className="img tall" />
          <img src={img4} className="img small" />
          <img src={img5} className="img small" />
          <img src={img6} className="img small" />
          
        </div>

      </div>
    </section>
  );
};

export default EnvironmentSection;
