import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import rectangle from "../../assets/about2.jpeg";
import Subtract from "../../assets/about3.jpeg";
import rectangle90 from "../../assets/about1.jpeg";

import './AboutUs.css'
const AboutUs = () => {
  return (
    
    <div className="container my-5">
      <div className="row align-items-center">

       
        <div className="col-md-6">
          <h2 className="about-title">
            About <span>Us</span>
          </h2>

          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Faucibus libero risus semper habitant arcu eget. 
            Et integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

         <button className="btn btn-danger learn-more-btn">
  LEARN MORE
</button>

        </div>

        
        <div className="col-md-6 position-relative">

 
  <img
    src={rectangle}
    alt="top"
    className="img-fluid rounded-4 mb-3 w-100 top-img"
  />

  
  <img
    src={Subtract }
    alt="middle"
    className="img-fluid rounded-4 w-100 middle-img"
  />

  
  <img
    src={rectangle90}
    alt="small"
    className="small-img"
  />

  
  <div className="badge-500">500+</div>
  

</div>
</div>
</div>
  )
}

export default AboutUs