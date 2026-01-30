import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import './Education.css'
import education2 from "../../assets/education1.png";

const Education = () => {
  return (
    <div className="container-fluid education-container">
      <div className="row align-items-center">
        
      
        <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-lg-0">
          <div className="image-wrapper d-flex justify-content-center justify-content-lg-start">
            <img
              src={education2}
              alt="Back to School"
              className="img-fluid preschool-img"
            />
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 content-box">
          <h2 className="section-title mb-3">
            OPEN A PRESCHOOL <br /> 
            <span className="preschool-italic">
              FRANCHISE QUALIFICATION
            </span>
          </h2>
          <p>Who Can Become an Oratrics Kidzz Founding Partner?</p>

          <p>We invite educators, entrepreneurs, corporate professionals and investors who:</p>

          <ul className="requirements-list mt-4 mb-4">
            <li className="requirement-item">
              <span className="check-icon">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
             Aspire to build a premium education asset
            </li>
            <li className="requirement-item">
              <span className="check-icon">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              Believe in shaping future global leaders
            </li>
            <li className="requirement-item">
              <span className="check-icon">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              Seek a stable, high-trust, high-impact business
            </li>
            <li className="requirement-item">
              <span className="check-icon">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              Value long-term brand equity over short-term gains
            </li>
            <li className="requirement-item">
              <span className="check-icon">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              Are passionate about world-class learning standards
            </li>
          </ul>

          <p>With comprehensive academic systems, branding, marketing, training, technology and operational support, Oratrics Kidzz offers one of the safest and most scalable preschool investment models in the premium segment.
</p>

          <p>Download the Founding Partner Prospectus</p>


          <button className="download-btn">
            DOWNLOAD BROCHURE
          </button>
        </div>

      </div>
    </div>
  )
}

export default Education