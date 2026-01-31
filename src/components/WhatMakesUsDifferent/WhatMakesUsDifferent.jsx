import React from "react";
import "./WhatMakesUsDifferent.css";

import cloudBg from "../../assets/env.png";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";

const cards = [
  {
    img: img1,
    text:
      "Personality as a Core Subject\nConfidence, Presence And Leadership Are Taught, Not Left To Chance.",
  },
  {
    img: img2,
    text:
      "Public Speaking From Early Years\nClarity Of Thought, Expression And Stage Confidence From Age 3.",
  },
  {
    img: img3,
    text:
      "Global Citizen Mindset\nChildren Build Emotional Intelligence, Culture And Communication.",
  },
  {
    img: img4,
    text:
      "Future-Ready Curriculum\nCritical Thinking, Logical Reasoning And Emotional Intelligence From The Start.",
  },
];

const WhatMakesUsDifferent = () => {
  return (
    <section
      className="different-wrapper"
      style={{ backgroundImage: `url(${cloudBg})` }}
    >
      <div className="different-content">
        <h2>
          What makes us <br />
          <span>Different</span>
        </h2>

        <div className="different-cards">
          {cards.map((item, i) => (
            <div className="diff-card" key={i}>
              <img src={item.img} alt="" />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
