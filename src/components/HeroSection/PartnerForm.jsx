const PartnerForm = () => {
  return (
    <form>

      <div className="mb-3">
        <label>Full Name <span>*</span></label>
        <input type="text" className="form-control" placeholder="Enter Your Name" />
      </div>

      <div className="mb-3">
        <label>Email Address <span>*</span></label>
        <input type="email" className="form-control" placeholder="Enter Your Email" />
      </div>

      <div className="mb-3">
        <label>Mobile Number <span>*</span></label>
        <input type="tel" className="form-control" placeholder="0000000000" />
      </div>

      <div className="row mb-3">
        <div className="col">
          <label>State <span>*</span></label>
          <select className="form-select">
            <option>Select State</option>
          </select>
        </div>
        <div className="col">
          <label>Zip/Pin Code  <span>*</span></label>
          <input type="text" className="form-control" />
        </div>
      </div>

      <div className="form-check small mb-3">
        <input className="form-check-input" type="checkbox" />
        <label className="form-check-label">
          By clicking, I confirm minimum investment of <b>INR 15–20 Lacs</b> and
          agree to <span>Privacy Policy</span> & <span>Terms</span>
        </label>
      </div>

      <button className="verify-btn">
        Verify Mobile Number →
      </button>

      <p className="ssl-text">🔒 Secure SSL Encryption</p>
    </form>
  );
};

export default PartnerForm;
