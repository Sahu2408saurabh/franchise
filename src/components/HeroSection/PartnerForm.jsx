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
    "Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia",
    "Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi",
    "Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China","Colombia",
    "Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic",
    "Denmark","Djibouti","Dominica","Dominican Republic",
    "Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia",
    "Fiji","Finland","France",
    "Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana",
    "Haiti","Honduras","Hungary",
    "Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
    "Jamaica","Japan","Jordan",
    "Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan",
    "Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
    "Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico",
    "Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar",
    "Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway",
    "Oman",
    "Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal",
    "Qatar",
    "Romania","Russia","Rwanda",
    "Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino",
    "Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia",
    "Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria",
    "Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu",
    "Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan",
    "Vanuatu","Vatican City","Venezuela","Vietnam",
    "Yemen",
    "Zambia","Zimbabwe"
  ];

  // ✅ Initial state (important for reset)
  const initialFormState = {
    fullName: "",
    emailAddress: "",
    mobileNumber: "",
    country: "",
    zipCode: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.restful-api.dev/objects",
        formData
      );

      console.log("SUCCESS:", response.data);
      alert("Data sent successfully");

      // 🔥 RESET FORM AFTER SUCCESS
      setFormData(initialFormState);

    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  return (
    <div className="partner-wrapper d-flex align-items-center justify-content-center">
      <div className="partner-card shadow-lg">
        <div className="text-center mb-3">
          <span className="badge franchise-badge">
            Franchise Opportunity
          </span>
        </div>

        <h2 className="text-center fw-bold">Partner with Us</h2>
        <p className="text-center text-muted small">
          Start your journey with India's leading preschool network.
        </p>

        <form onSubmit={handleSubmit} className="mt-4">
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label">
              Full Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Fareya"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="fareya@example.com"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />
          </div>

          {/* Mobile */}
          <div className="mb-3">
            <label className="form-label">
              Mobile Number <span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              className="form-control"
              placeholder="9876543210"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>

          {/* Country & Zip */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">
                Country <span className="text-danger">*</span>
              </label>
              <select
                className="form-select"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Select Country</option>
                {countries.map((c, i) => (
                  <option key={i} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">
                ZIP Code <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="110001"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="form-check mb-3">
            <input className="form-check-input" type="checkbox" required />
            <label className="form-check-label small text-muted">
              I confirm minimum investment of
              <strong> INR 15–20 Lacs</strong> and agree to
              <span className="text-danger fw-bold ms-1"> Privacy Policy</span> &
              <span className="text-danger fw-bold ms-1"> Terms</span>
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-danger w-100 py-2 fw-semibold">
            Verify Mobile Number →
          </button>

          <p className="text-center text-muted small mt-3">
            By clicking 'Verify Mobile Number', you
            <br />agree to receive communications.
          </p>

          <p className="text-center text-muted small">
            <FontAwesomeIcon icon={faShieldHalved} className="me-1" />
            Secure SSL Encryption
          </p>
        </form>
      </div>
    </div>
  );
};

export default PartnerForm;
