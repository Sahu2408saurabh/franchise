import { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <div className="navbar-bar">
        <div className="container navbar-inner">
          
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          
          <ul className="menu-list desktop-menu">
            <li>Home</li>
            <li>About Us</li>
            <li>
              Programs <span className="arrow">▼</span>
            </li>
            <li>Blog</li>
            <li>Career & Stories</li>
          </ul>

         
          <button className="contact-btn desktop-btn">
            Contact Us
          </button>

          
          <div
            className={`hamburger ${open ? "active" : ""}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

       
        <div className={`mobile-menu ${open ? "show" : ""}`}>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Programs</li>
            <li>Blog</li>
            <li>Career & Stories</li>
            <li>
              <button className="contact-btn mobile-btn">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>

     
      <svg
        className="drip-svg"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
      >
        <path
          fill="#9b0000"
          d="
            M0,0
            L0,80
            C80,120 160,120 240,90
            C300,70 320,120 360,115
            C400,110 420,80 460,70
            C520,50 600,110 680,100
            C740,95 760,140 820,135
            C880,130 900,90 960,80
            C1020,70 1080,120 1140,105
            C1200,90 1260,140 1320,120
            C1380,100 1440,120 1440,120
            L1440,0
            Z
          "
        />
      </svg>
    </header>
  );
};

export default Navbar;
