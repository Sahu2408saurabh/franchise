import React from "react";
import "./ArticlesSection.css";

const ArticlesSection = () => {
  const articles = [
    {
      title: "10 Fun Learning Methods",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod ...",
    },
    {
      title: "10 Fun Learning Methods",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod ...",
    },
    {
      title: "10 Fun Learning Methods",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod ...",
    },
  ];

  return (
    <section className="articles-section">
      {/* Header */}
      <div className="articles-header">
        <h2>
          Lorem ipsum <span>Diodet</span>
        </h2>

        <button className="more-btn">
          More articles <span>➜</span>
        </button>
      </div>

      {/* Cards */}
      <div className="articles-grid">
        {articles.map((item, index) => (
          <div className="article-card" key={index}>
            <div className="card-image"></div>

            <div className="card-content">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>

              <button className="read-btn">Read more</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;
