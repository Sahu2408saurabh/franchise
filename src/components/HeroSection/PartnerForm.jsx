import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
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
    <div className="partner-section">
      <h1 className="heading">Own the Future</h1>
      <p className="sub-heading">
        Bring USA’s Global Preschool Experience <br />
        to Your City
      </p>

      <div className="outer-card">
        <h3 className="card-title">Book a Call</h3>

        <div className="inner-card">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Fareya"
                required
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                className="form-control"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                placeholder="fareya@gmail.com"
                required
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Mobile Number *</label>
              <input
                type="tel"
                className="form-control"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder="+91-0000000000"
                required
              />
            </div>

            <div className="row">
              <div className="col-6 mb-2">
                <label className="form-label">Country *</label>
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

              <div className="col-6 mb-3">
                <label className="form-label">ZIP Code *</label>
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

            {/* CENTER BUTTON */}
            <div className="text-center">
              <button type="submit" className="btn btn-danger submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnerForm;
