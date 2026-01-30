import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import test from "../../assets/test1.png";
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
    rating: 4,
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
    <section className="py-4 py-md-5 bg-white">
      <div className="container">
        
        <div className="row mb-4 mb-md-0">
          <div className="col-12 d-block d-lg-none text-center">
            <img
              src={test}
              alt="Mom and child"
              className="img-fluid mobile-image"
            />
          </div>
        </div>

        <div className="row align-items-center">
          
          <div className="col-lg-6 d-none d-lg-block">
            <div className="text-center">
              <img
                src={test}
                alt="Mom and child"
                className="img-fluid desktop-image"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>

          
          <div className="col-lg-6">
            
            <div className="text-center text-lg-start">
              <h2 className="fw-bold mb-3 mb-md-4 testimonial-title">
                <span className="fst-italic text-danger">Testimonials</span> from moms
                <br className="d-none d-md-block" />
                who are proud to entrust
                <br className="d-none d-md-block" />
                their children to us
              </h2>

              <p className="text-muted mb-4 mb-lg-5 testimonial-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
              </p>
            </div>

            
            <div className="d-none d-lg-block">
              <div className="position-relative">

                
                <div id="desktopCarousel" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {[0, 2].map((start, idx) => (
                      <div
                        key={idx}
                        className={`carousel-item ${idx === 0 ? "active" : ""}`}
                      >
                        <div className="row g-4">
                          {testimonials.slice(start, start + 2).map((item, i) => (
                            <div className="col-md-6" key={i}>
                              <div className="testimonial-card text-center h-100">
                                <div className="card-content">
                                  <p className="testimonial-text mb-3">{item.text}</p>

                                  <div className="stars mb-3">
                                    {Array.from({ length: item.rating }).map((_, j) => (
                                      <span key={j}>★</span>
                                    ))}
                                  </div>



                                  
                                  <div className="avatar-wrapper">
                                    <div className="avatar mb-2">
                                      <img src={item.image} alt={item.name} className="img-fluid" />
                                    </div>
                                    <h6 className="testimonial-name mb-0">{item.name}</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  
                  <button
                    className="carousel-control-prev desktop-control"
                    type="button"
                    data-bs-target="#desktopCarousel"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next desktop-control"
                    type="button"
                    data-bs-target="#desktopCarousel"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

                
                <div className="carousel-indicators-container mt-4">
                  <div className="carousel-indicators">
                    {[0, 1].map((index) => (
                      <button
                        key={index}
                        type="button"
                        data-bs-target="#desktopCarousel"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-label={`Slide ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          
            <div className="d-block d-lg-none mt-4">
              <div id="mobileCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {testimonials.map((item, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <div className="testimonial-card text-center mx-auto h-100">
                        <div className="card-content">
                          <p className="testimonial-text mb-3">{item.text}</p>

                          <div className="stars mb-3">
                            {Array.from({ length: item.rating }).map((_, j) => (
                              <span key={j}>★</span>
                            ))}
                          </div>

                          <div className="avatar-wrapper">
                            <div className="avatar mb-2">
                              <img src={item.image} alt={item.name} className="img-fluid" />
                            </div>
                            <h6 className="testimonial-name mb-0">{item.name}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              
                <button
                  className="carousel-control-prev mobile-control"
                  type="button"
                  data-bs-target="#mobileCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next mobile-control"
                  type="button"
                  data-bs-target="#mobileCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              
              <div className="carousel-indicators-container mt-4">
                <div className="carousel-indicators">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      data-bs-target="#mobileCarousel"

                      
                      data-bs-slide-to={index}
                      className={index === 0 ? "active" : ""}
                      aria-label={`Slide ${index + 1}`}
                    ></button>
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
