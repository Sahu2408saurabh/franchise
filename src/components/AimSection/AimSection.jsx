import React from "react";

import t1 from "../../assets/1.png";
import t2 from "../../assets/2.png";
import t3 from "../../assets/3.png";
import t4 from "../../assets/4.png";

import arrow from "../../assets/ARROW.png";
import dots from "../../assets/ELM1.png";
import star1 from "../../assets/Star 1.png";
import star2 from "../../assets/Star 2.png";
import union from "../../assets/Union.png";

import "./aim.css";

const AimSection = () => {
  return (
    <section className="aim-section position-relative overflow-hidden">
      {/* Decorative Icons */}
      <img src={union} alt="" className="icon-union" />
      <img src={star1} alt="" className="icon-star1" />
      <img src={arrow} alt="" className="icon-arrow" />
      <img src={dots} alt="" className="icon-dots" />
      <img src={star2} alt="" className="icon-star2" />

      <div className="container text-center text-white position-relative py-5">
        <h2 className="aim-title">
          We aim to help children <br />
          <span className="highlight">Discover the joy of creative</span> <br />
          learning and grow into well- <br />
          rounded individuals
        </h2>

        <div className="mt-3">
          <button className="btn btn-light rounded-pill px-4 py-2">
            Learn more
          </button>
        </div>

        {/* Teachers */}
        <div className="row justify-content-center mt-5 ">
          {[
            { img: t1},
            { img: t2 },
            { img: t3 },
            { img: t4 },
          ].map((t, i) => (
            <div key={i} className="col-6 col-md-3 text-center">
              <div className={`teacher-wrap ${t.bg}`}>
                <img src={t.img} alt="" className="teacher-img" />
              </div>

             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AimSection;
