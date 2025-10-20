import React from 'react';
import logoImg from '../../images/Prometheus_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logoImg} alt="Prometheus Logo" className="footer-logo-img" />
            <span>TEAM PROMETHEUS</span>
          </div>
          <p className="footer-text">
            Engineered for Intelligence and Innovation
          </p>
          <p className="footer-institution">
            Powered by Sri Krishna College of Engineering and Technology, Coimbatore
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
