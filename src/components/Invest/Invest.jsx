import React from "react";
import "./Invest.css";
import investImg from "../../assets/invest.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";

const Invest = () => {
  return (
    <section className="invest">
      <div className="invest-wrapper">

      
        <div className="invest-left">
        

          <img src={investImg} alt="Invest Illustration" />
        </div>

        
        <div className="invest-right">
          <h2>
            Why Invest in <span>Oratrics Kidzz</span>
          </h2>

          <p className="invest-subtitle">
            Join a high-growth ecosystem designed for the future.
            Build a legacy of excellence with a premium international brand.
          </p>

          <div className="invest-grid">
            <div className="invest-card">
              <div className="icon-box">
                <img src={icon1} alt="Icon 1" />
              </div>
              <h4>Premium International Brand</h4>
              <p>USA-based, positioned in the high value global preschool segment.</p>
            </div>

            <div className="invest-card">
              <div className="icon-box">
                <img src={icon2} alt ="Icon 2" />
              </div>
              <h4>Clear Differentiation</h4>
              <p>Leadership, personality & global exposure from early years.</p>
            </div>

            <div className="invest-card">
              <div className="icon-box">
                <img src={icon3} alt="Icon 3" />
              </div>
              <h4>High Aspiration Market</h4>
              <p>Parents seek confident speakers and future global leaders.</p>
            </div>

            <div className="invest-card">
              <div className="icon-box">
                <img src={icon4} alt="Icon 4" />
              </div>
              <h4>Strong ROI Potential</h4>
              <p>250–300% year-on-year growth opportunity.</p>
            </div>

            <div className="invest-card">
              <div className="icon-box">
                <img src={icon5} alt="Icon 5" />
              </div>
              <h4>Global Ecosystem</h4>
              <p>Part of the expanding Oratrics Future Human network.</p>
            </div>

            <div className="invest-card">
              <div className="icon-box">
                <img src={icon6} alt="Icon 6" />
              </div>
              <h4>Legacy Investment</h4>
              <p>Build a prestigious institution with long-term wealth.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Invest;
