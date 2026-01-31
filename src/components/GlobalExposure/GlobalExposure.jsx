import React from "react";
import "./GlobalExposure.css";

import flag1 from "../../assets/flags/USA.png";
import flag2 from "../../assets/flags/Canada.png";
import flag3 from "../../assets/flags/UK.png";
import flag9 from "../../assets/flags/SaudiArabia.svg";
import flag5 from "../../assets/flags/Singapore.png";
import flag6 from "../../assets/flags/Netherlands.png";
import flag7 from "../../assets/flags/China.png";
import flag8 from "../../assets/flags/Malaysia.png";
import flag4 from "../../assets/flags/UAE.png";
import flag10 from "../../assets/flags/Qatar.png";
import flag11 from "../../assets/flags/India.webp";
import flag16 from "../../assets/flags/Australia.png";
import flag13 from "../../assets/flags/NewZealand.svg";
import flag14 from "../../assets/flags/Kuwait.png";
import flag15 from "../../assets/flags/Bahrain.webp";
import flag12 from "../../assets/flags/Hongkong.svg";

const flags = [
  flag1, flag2, flag3, flag4, flag5, flag6,
  flag7, flag8, flag9, flag10, flag11, flag12,
  flag13, flag14, flag15, flag16,
];

const GlobalExposure = () => {
  return (
    <div className="global-section">
      <h2 className="global-text">
        Offer your students global exposure <br />
        through live <span className="red">interactions</span> with{" "}
        <span className="red">children</span> from
      </h2>

      <div className="flag-slider">
        <div className="flag-track">
          {[...flags, ...flags].map((flag, i) => (
            <img src={flag} alt="flag" key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalExposure;
