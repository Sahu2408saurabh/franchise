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

          <h5 className="text-muted">
           Raising the Next Generation of Global Leaders
           </h5>
           <br/>
<p className="text-muted">
Oratrics Kidzz is the early-childhood flagship of Oratrics – The Personality School, built to shape confident global citizens from the very start.
We go beyond school readiness to prepare children for the real world.
Through confidence building, communication mastery, leadership and financial intelligence, we unlock their true potential.
Our programs nurture emotional strength, clarity of expression, and global exposure.
At Oratrics Kidzz, we don’t just educate children — we empower future leaders.

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