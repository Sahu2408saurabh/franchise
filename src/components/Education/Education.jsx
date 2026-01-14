import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import './Education.css'
import education2 from "../../assets/education.jpeg";
const Education = () => {
  return (
    
    
    <div className="container-fluid px-3">
  <div className="row align-items-center">

    
    <div className="col-lg-6 mb-3 mb-lg-0 ">
      <img
        src={education2}
        alt="Back to School"
        className="img-fluid preschool-img"
      />
    </div>

    
    <div className="col-lg-6 box content-tight">
      <h2 className="fw-300 mb-2">
        Requirements to <br /> 
       <span className="preschool-italic">
          Open a Preschool
         </span>

      </h2>

      <ul className="list-unstyled mt-3 mb-4">
        <li className="d-flex mb-2">
          <span className="check-icon"><FontAwesomeIcon icon={faCircleCheck} color="#9c0404" size="lg" /></span>
          Master program knowledge at school
        </li>
        <li className="d-flex mb-2">
          <span className="check-icon"><FontAwesomeIcon icon={faCircleCheck} color="#9c0404" size="lg" /></span>
          The ability to criticize knowledge increases
        </li>
        <li className="d-flex">
          <span className="check-icon"><FontAwesomeIcon icon={faCircleCheck} color="#9c0404" size="lg" /></span>
          Respond confidently when encountering difficult situations
        </li>
      </ul>

      <button className="btn btn-danger px-4 py-2  shadow">
        DOWNLOAD BROCHURE
      </button>
    </div>

  </div>
</div>

  )
}

export default Education