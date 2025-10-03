import React from 'react';
import './RetainerServices.css';
import legalImg from '../assets/rs1.png'; // Replace with your actual image path
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
              <li>
                <strong>Retainer – Recruitment:</strong> A dedicated consultant will work exclusively with your team to identify and onboard the most suitable candidates. Our focused approach ensures reduced time-to-hire and optimized resource utilization.
              </li>
              <li>
                <strong>Retainer – HR:</strong> Our HR professionals collaborate closely with your internal HR and policy teams to support:
                <ul>
                  <li>Strategic policy development</li>
                  <li>Training needs assessment</li>
                  <li>Soft skills training programs</li>
                </ul>
              </li>
              <li>
                <strong>Retainer – Payroll:</strong> We manage end-to-end payroll operations, including:
                <ul>
                  <li>Employee time tracking</li>
                  <li>Salary computation</li>
                  <li>Incentive and bonus processing</li>
                  <li>Statutory payouts</li>
                  <li>Claims management</li>
                </ul>
              </li>
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
