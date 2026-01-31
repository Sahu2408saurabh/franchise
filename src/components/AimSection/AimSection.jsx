import React from "react";
import "./aim.css";

const programs = [
  { name: "Daycare\nProgram" },
  { name: "Nursery" },
  { name: "Pre-KG (Pre-Kindergarten)" },
  { name: "LKG (Lower Kindergarten)" },
  {
    name: "UKG (Upper Kindergarten)\nAge Group: 5.5 – 6.5 Years\nGlobal Term: Kindergarten 2",
    active: true,
  },
];

const EarlyChildhoodPrograms = () => {
  return (
    <section className="program-section">
      <div className="container text-center">

        <h2 className="heading">
          Our Global <span>Early Childhood Programs</span>
        </h2>

        <p className="desc">
          Internationally Benchmarked Learning Pathways From Infancy To
          Kindergarten Designed To Build Confident, Expressive And
          Future-Ready Global Citizens.
        </p>

        <button className="learn-more">Learn more</button>

        <div className="card-row">
          {programs.map((item, index) => (
            <div
              key={index}
              className={`program-card ${item.active ? "active" : ""}`}
            >
              {/* arrow */}
              <div className="arrow-box">↗</div>

              {/* icon */}
              <div className="icon-box">🎓</div>

              {/* text */}
              <p className="card-text">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarlyChildhoodPrograms;
