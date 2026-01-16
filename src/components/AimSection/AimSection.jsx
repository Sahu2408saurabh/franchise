import React, { useState, useEffect } from "react";
import t1 from "../../assets/1.png";
import t2 from "../../assets/2.png";
import t3 from "../../assets/3.png";
import t4 from "../../assets/4.png";
 


import arrow from "../../assets/ARROW.png";
import dots from "../../assets/ELM1.png";
import star1 from "../../assets/Star 1.png";
import star2 from "../../assets/Star 2.png";
import union from "../../assets/Union.png";

import "./aim.css";

const AimSection = () => {
  const teachers = [
    { 
      img: t1, 
      
    },
    { 
      img: t2, 
      
    },
    { 
      img: t3, 
      
    },
    { 
      img: t4, 
      
    },
  
   
    { 
      img: t1, 
      
    },
    { 
      img: t2, 
      
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  // const [isMobile, setIsMobile] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4);

  // Detect screen size for responsive behavior
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      // setIsMobile(width < 992);
      
      if (width >= 1400) {
        setSlidesToShow(4);
      } else if (width >= 992) {
        setSlidesToShow(4);
      } else if (width >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    
    return () => {
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, []);

  
  const totalSlides = Math.ceil(teachers.length / slidesToShow);

  
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0); 
    }
  };

  
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(totalSlides - 1); 
    }
  };


  const getVisibleTeachers = () => {
    const startIndex = currentSlide * slidesToShow;
    const endIndex = startIndex + slidesToShow;
    return teachers.slice(startIndex, endIndex);
  };

  
  const getColumnClass = () => {
    if (slidesToShow === 1) return "col-12";
    if (slidesToShow === 2) return "col-6";
    if (slidesToShow === 3) return "col-4";
    if (slidesToShow === 4) return "col-6 col-lg-3";
    return "col-6 col-lg-3";
  };

  return (
    <section className="aim-section position-relative overflow-hidden">
      
      <img src={union} alt="" className="icon-union" />
      <img src={star1} alt="" className="icon-star1" />
      <img src={arrow} alt="" className="icon-arrow" />
      <img src={dots} alt="" className="icon-dots" />
      <img src={star2} alt="" className="icon-star2" />

      <div className="container text-center text-white position-relative py-5">
        <h2 className="aim-title">
          We aim to help children <br />
          <span className="highlight">discover the joy of creative</span> <br />
          learning and grow into well- <br />
          rounded individuals
        </h2>

        <div className="mt-4">
          <button className="btn btn-learn-more btn-outline-light rounded-pill">
            Learn more
          </button>
        </div>

        {/* Teachers Carousel Section - Always visible */}
        <div className="teachers-carousel-container mt-5 pt-4">
          <div className="carousel-container position-relative">
            
            {/* Navigation Buttons */}
            <button 
              className="carousel-btn prev-btn" 
              onClick={prevSlide}
              aria-label="Previous teachers"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            
            <button 
              className="carousel-btn next-btn" 
              onClick={nextSlide}
              aria-label="Next teachers"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>

            {/* Carousel Slides */}
            <div className="carousel-slides">
              <div className="row justify-content-center align-items-center">
                {getVisibleTeachers().map((teacher, index) => (
                  <div key={index} className={getColumnClass()}>
                    <div className="teacher-item text-center mb-4">
                      <div className={`teacher-wrap ${teacher.bg} mx-auto`}>
                        <img 
                          src={teacher.img} 
                          alt={`Teacher ${index + 1}`} 
                          className="teacher-img" 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators - Show only when needed */}
            {/* {totalSlides > 1 && (
              <div className="carousel-controls d-flex justify-content-center align-items-center mt-4">
                <div className="carousel-indicators">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            )} */}
          </div>

          {/* Teacher Counter */}
          {/* <div className="teacher-counter mt-3">
            <span className="counter-text">
              {currentSlide * slidesToShow + 1} - {Math.min((currentSlide + 1) * slidesToShow, teachers.length)} of {teachers.length}
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AimSection;