import React from "react";
import "./need.css";
import need from "../../assets/need.png";

const Need = () => {
  const cards = [
    {
      title: "3000+ Sq. Ft. Premium Space",
      desc: "Designed to create a world-class early leadership environment.",
    },
    {
      title: "Investment 25–30 Lakh ",
      desc: " Affordable entry for a high-return opportunity.",
    },
    {
      title: "Strategic Urban Location",
      desc: "High-aspiration parent catchment with premium positioning.",
    },
    {
      title: "Investment in Excellence",
      desc: "A brand built for long-term value, not short-term volume.",
    },
  ];

  return (
    <div className="need-section">
      <h1 className="title">
        What you <span>Need</span> is
      </h1>

      <div className="need-grid">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`need-card ${index === 1 ? "active" : ""}`}
          >
            <img src={need} alt="icon" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Need;
