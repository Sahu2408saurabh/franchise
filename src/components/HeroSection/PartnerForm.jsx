import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import "./PartnerForm.css";

const PartnerForm = () => {
 const countries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola",
  "Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan",

  "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin",
  "Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria",
  "Burkina Faso","Burundi",

  "Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad",
  "Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus",
  "Czech Republic",

  "Denmark","Djibouti","Dominica","Dominican Republic",

  "Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia",
  "Eswatini","Ethiopia",

  "Fiji","Finland","France",

  "Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala",
  "Guinea","Guinea-Bissau","Guyana",

  "Haiti","Honduras","Hungary",

  "Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",

  "Jamaica","Japan","Jordan",

  "Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan",

  "Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania",
  "Luxembourg",

  "Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands",
  "Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia",
  "Montenegro","Morocco","Mozambique","Myanmar",

  "Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria",
  "North Korea","North Macedonia","Norway",

  "Oman",

  "Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines",
  "Poland","Portugal",

  "Qatar",

  "Romania","Russia","Rwanda",

  "Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa",
  "San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles",
  "Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia",
  "South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname",
  "Sweden","Switzerland","Syria",

  "Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga",
  "Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu",

  "Uganda","Ukraine","United Arab Emirates","United Kingdom","United States",
  "Uruguay","Uzbekistan",

  "Vanuatu","Vatican City","Venezuela","Vietnam",

  "Yemen",

  "Zambia","Zimbabwe"
];


  const initialFormState = {
    fullName: "",
    emailAddress: "",
    mobileNumber: "",
    country: "",
    zipCode: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://api.restful-api.dev/objects", formData);
      alert("Data sent successfully");
      setFormData(initialFormState);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="partner-wrapper d-flex justify-content-center ">
      <div className="partner-card shadow">

        <div className="text-center mb-2">
          <span className="badge franchise-badge">Franchise Opportunity</span>
        </div>

        <h2 className="text-center fw-bold mb-1">Partner with Us</h2>
        <p className="text-center text-muted small mb-2">
          Start your journey with India's leading preschool network.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="mb-2">
            <label className="form-label small">Full Name *</label>
            <input
              type="text"
              className="form-control"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-2">
            <label className="form-label small">Email Address *</label>
            <input
              type="email"
              className="form-control"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-2">
            <label className="form-label small">Mobile Number *</label>
            <input
              type="tel"
              className="form-control"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <div className="col-6 mb-2">
              <label className="form-label small">Country *</label>
              <select
                className="form-select"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                {countries.map((c, i) => (
                  <option key={i}>{c}</option>
                ))}
              </select>
            </div>

            <div className="col-6 mb-2">
              <label className="form-label small">ZIP Code *</label>
              <input
                type="text"
                className="form-control"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          

          <div className="form-check mb-2">
          
            <input className="form-check-input" type="checkbox" required />
            <label className="form-check-label small text-muted">
              I confirm minimum investment of
              <strong> INR 15–20 Lacs</strong> and
              <br/>
               agree to
              <span className="text-danger fw-bold ms-1"> Privacy Policy</span> &
              <span className="text-danger fw-bold ms-1"> Terms</span>
            </label>
          </div>

          <button type="submit" className="btn btn-danger w-80 py-1 fw-semibold">
            Verify Mobile Number →
          </button>

          <p className="text-center text-muted small mt-2 mb-1">
            By clicking Verify, you agree to receive communication.
          </p>

          <p className="text-center text-muted small mb-0">
            <FontAwesomeIcon icon={faShieldHalved} /> Secure SSL Encryption
          </p>

        </form>
      </div>
    </div>
  );
};

export default PartnerForm;
