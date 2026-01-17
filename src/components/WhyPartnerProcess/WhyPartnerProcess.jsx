import React from "react";
import "./WhyPartnerProcess.css";
 import icon from "../../assets/process-icon.png"; 

const steps = [
  { title: "Test & Interview", desc: "We evaluate your fundamentals." },
  { title: "Test & Interview", desc: "We evaluate your fundamentals." },
  { title: "Test & Interview", desc: "We evaluate your fundamentals." },
  { title: "Test & Interview", desc: "We evaluate your fundamentals." },
  { title: "Test & Interview", desc: "We evaluate your fundamentals." },
];

const WhyPartnerProcess = () => {
  return (
    <section className="process-section">
      <div className="container">
        <h2 className="title">
          Why Partner with <span>Oratrics Kiddz</span>
        </h2>

        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper habitant arcu eget. Et integer.
        </p>

        {/* TOP ROW */}
        <div className="process-row top">
          {steps.slice(0, 3).map((item, index) => (
            <div className="process-item" key={index}>
              <div className="circle">
                <img src={icon} alt="" />
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>

              {index < 2 && <span className="arrow arrow-right"></span>}
            </div>
          ))}
        </div>

        {/* BOTTOM ROW */}
        <div className="process-row bottom">
          {steps.slice(3).map((item, index) => (
            <div className="process-item" key={index}>
              <div className="circle">
                <img src={icon} alt="" />
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>

              {index === 0 && <span className="arrow arrow-left"></span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerProcess;
