import React from "react";
import "./ArticlesSection.css";
import cardImg from "../../assets/test1.png";

const ArticlesSection = () => {
  const articles = [
    {
      title: "10 Fun Learning Methods",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod ...",
      img: cardImg,
    },
    {
      title: "10 Fun Learning Methods",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod ...",
      img: cardImg,
    },
    {
      title: "10 Fun Learning Methods",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod ...",
      img: cardImg,
    },
  ];

  return (
    <section className="articles-section">
      {/* Header */}
      <div className="articles-header">
        <h2>
          What the World Is Saying About  <span>Oratrics ?</span>
        </h2>

        <button className="more-btn">
          More articles <span>➜</span>
        </button>
      </div>

      {/* Cards */}
      <div className="articles-grid">
        {articles.map((item, index) => (
          <div className="article-card" key={index}>
            {/* IMAGE */}
            <div className="card-image">
              <img src={item.img} alt="article" />
            </div>

            {/* CONTENT */}
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
