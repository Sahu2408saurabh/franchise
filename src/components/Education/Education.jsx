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
            Requirements to <br /> 
            <span className="preschool-italic">
              Open a Preschool
            </span>
          </h2>

          <ul className="requirements-list mt-4 mb-4">
            <li className="requirement-item">
              <span className="check-icon">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              Master program knowledge at school
            </li>
            <li className="requirement-item">
              <span className="check-icon">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              The ability to criticize knowledge increases
            </li>
            <li className="requirement-item">
              <span className="check-icon">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              Respond confidently when encountering difficult situations
            </li>
          </ul>

          <button className="download-btn">
            DOWNLOAD BROCHURE
          </button>
        </div>

      </div>
    </div>
  )
}

export default Education