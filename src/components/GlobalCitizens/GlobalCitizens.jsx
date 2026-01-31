import React from "react";
import "./GlobalCitizens.css";

const GlobalCitizens = () => {
  return (
    <section className="gc-section">
      <div className="gc-container">
        <h2 className="gc-title">
          From Local Classroom to <br />
          <span>Global Citizens</span>
        </h2>

        <p className="gc-desc">
          Oratrics Kiddz is part of a global ecosystem preparing children to
          study, speak, lead and succeed across borders.
        </p>

        <div className="gc-orbit">
          <div className="gc-ring"></div>

          <span className="gc-tag smart pos-smart">#smart</span>
          <span className="gc-tag friendly pos-friendly">#friendly</span>
          <span className="gc-tag leader pos-leader">#Leader</span>
          <span className="gc-tag responsible pos-responsible">#responsible</span>
          <span className="gc-tag oratrics pos-oratrics">#Oratrics</span>
        </div>
      </div>
    </section>
  );
};

export default GlobalCitizens;
