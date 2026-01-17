import React from "react";
import "./WhyPartner.css";
import kidsImg from "../../assets/why.png";

const WhyPartner = () => {
  const cards = [
    { iconColor: "pink", bg: "pink-bg" },
    { iconColor: "purple", bg: "purple-bg" },
    { iconColor: "pink", bg: "pink-bg" },
    { iconColor: "pink", bg: "pink-bg" },
  ];

  return (
    <section className="why-partner">
      <div className="container">
        <h2 className="title">
          Why Partner with <span>Oratrics Kiddz</span>
        </h2>

        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper habitant arcu eget.
        </p>

        <div className="content">
          {/* LEFT IMAGE */}
          <div className="left">
            <img src={kidsImg} alt="Kids Illustration" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="right">
            {cards.map((item, index) => (
              <div className="info-card" key={index}>
                <div className={`icon ${item.iconColor}`}>₹</div>
                <p>13 Lacs Investment*</p>
                <span className={`card-bg ${item.bg}`}></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
