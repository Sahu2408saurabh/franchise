import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import test from "../assets/test.png";
import "./testimonials.css";

const testimonials = [
  {
    name: "Shany White",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod",
    rating: 5,
  },
  {
    name: "Judy Robert",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod",
    rating:4 ,
  },
  {
    name: "Anna Smith",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod",
    rating: 5,
  },
  {
    name: "Maria John",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-5">

         
          <div className="col-lg-6 text-center">
            <img
              src={test}
              alt="Mom and child"
              className="img-fluid"
              style={{ maxWidth: "500px" }}
            />
          </div>

          
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">
              <span className="fst-italic text-danger">Testimonials</span> from moms
              <br />
              who are proud to entrust
              <br />
              their children to us
            </h2>

            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
            </p>

          
            <div className="position-relative mt-4">
              <button
                className="slider-btn left"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
              >
                ←
              </button>

              <button
                className="slider-btn right"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
              >
                →
              </button>

              <div id="testimonialCarousel" className="carousel slide">
                <div className="carousel-inner">

                  {[0, 2].map((start, idx) => (
                    <div
                      key={idx}
                      className={`carousel-item ${idx === 0 ? "active" : ""}`}
                    >
                      <div className="row g-4">
                        {testimonials.slice(start, start + 2).map((item, i) => (
                          <div className="col-md-6" key={i}>
                            <div className="testimonial-card text-center">
                              <p>{item.text}</p>

                              <div className="stars">
                                {Array.from({ length: item.rating }).map((_, j) => (
                                  <span key={j}>★</span>
                                ))}
                              </div>

                              <div className="avatar">
                                <img src={item.image} alt={item.name} />
                              </div>

                              <h6>{item.name}</h6>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
