import React from "react";
import instagram_icon from "../Assets/instagram_icon.png";
import footer_logo from "../Assets/logo_big.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={footer_logo} alt="Footer Logo" />
          <p>Dressify</p>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
          <img src={instagram_icon} alt="Instagram" className="footer-icon" />
          <img src={pintester_icon} alt="Pinterest" className="footer-icon" />
          <img src={whatsapp_icon} alt="WhatsApp" className="footer-icon" />
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>Copyright © 2024 - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
