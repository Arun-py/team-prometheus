import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaAward, FaUsers, FaLightbulb } from 'react-icons/fa';

const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <motion.div
          data-aos="fade-up"
          className="section-header"
        >
          <h2 className="section-title">
            <FaTrophy className="section-icon" />
            Recognition & Achievements
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="achievements-content">
          <motion.div
            data-aos="zoom-in"
            className="achievement-card main-achievement"
          >
            <div className="achievement-badge">
              <FaAward className="badge-icon" />
            </div>
            <h3>Smart India Hackathon 2025</h3>
            <p className="achievement-subtitle">Internal Round – Shortlisted Team</p>
            <div className="achievement-details">
              <div className="detail-item">
                <span className="detail-label">Team ID:</span>
                <span className="detail-value">91678</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Institution:</span>
                <span className="detail-value">Sri Krishna College of Engineering and Technology</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Coimbatore</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">AICTE Registration:</span>
                <span className="detail-value">1-3131583898</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Principal:</span>
                <span className="detail-value">Dr. K. Porkumaran</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            data-aos="fade-up"
            data-aos-delay="200"
            className="focus-areas"
          >
            <h3>
              <FaLightbulb className="focus-icon" />
              Innovation Focus Areas
            </h3>
            <div className="focus-grid">
              <div className="focus-item" data-aos="flip-right" data-aos-delay="100">
                Smart Automation
              </div>
              <div className="focus-item" data-aos="flip-right" data-aos-delay="200">
                Renewable Energy Systems
              </div>
              <div className="focus-item" data-aos="flip-right" data-aos-delay="300">
                Edge Intelligence
              </div>
              <div className="focus-item" data-aos="flip-right" data-aos-delay="400">
                IoT-based Control
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
