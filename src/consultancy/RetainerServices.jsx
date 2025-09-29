import React from 'react';
import './RetainerServices.css';
import legalImg from '../assets/legal.jpeg'; // Replace with your actual image path
import legalBg from '../assets/legal-bg.jpg'; // Replace with background image path

const RetainerServices = () => {

  return (
    <div className="legal-page">
      <div
        className="legal-hero"
        style={{ backgroundImage: `url(${legalBg})` }}
      >
        <div className="legal-overlay">
          <h1>Retainer Services</h1>
        </div>
      </div>

      <div className="legal-content">
        <div className="text-section">
          <p className="service-label">OUR SERVICES</p>
          <h2>Retainer Services</h2>
          <div className="legal-description">
            <h3>We offer expert retainer services in areas such as:</h3>
            <ul>
              <li><strong>Corporate Law:</strong> Legal structuring and documentation for businesses</li>
              <li><strong>Compliance:</strong> Statutory and regulatory compliance services</li>
              <li><strong>Labor Law:</strong> Employee contracts, termination policy review</li>
              <li><strong>Legal Documentation:</strong> Drafting MOUs, agreements, and notices</li>
            </ul>
          </div>
        </div>

        <div className="legal-image-section">
          <img src={legalImg} alt="Legal Consultancy" />
        </div>
      </div>
    </div>
  );
};

export default RetainerServices;
