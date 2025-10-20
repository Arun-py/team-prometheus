import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCube, FaNetworkWired, FaChartLine, FaCogs, FaShieldAlt } from 'react-icons/fa';

const Innovation = () => {
  const innovations = [
    {
      icon: <FaCogs />,
      title: 'Active Impedance Modeling',
      description: 'Dynamic control for electrical fault simulation.',
      color: '#ff6b00',
    },
    {
      icon: <FaBrain />,
      title: 'AI on the Edge',
      description: 'Predictive analytics in resource-constrained IoT nodes.',
      color: '#ffa500',
    },
    {
      icon: <FaCube />,
      title: 'Digital Twin Simulation',
      description: 'Safe pre-validation of high-current tests.',
      color: '#ffb347',
    },
    {
      icon: <FaNetworkWired />,
      title: 'Offline-First IoT Architecture',
      description: 'Ensures operation even during outages.',
      color: '#ff8c00',
    },
    {
      icon: <FaChartLine />,
      title: 'Unified Automation Framework',
      description: 'Scalable, modular design for labs and industries.',
      color: '#ffd700',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Intelligent Safety Layer',
      description: 'Adaptive interlocks and real-time fault detection systems that respond autonomously to high-risk events.',
      color: '#f39c12',
    },
  ];

  return (
    <section className="innovation" id="innovation">
      <div className="container">
        <motion.div
          data-aos="fade-up"
          className="section-header"
        >
          <h2 className="section-title">
            <FaBrain className="section-icon" />
            Engineering Intelligence Through Automation and Data
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Prometheus unites AI, Embedded Systems, Digital Twins, and Automation to create next-generation 
            solutions that are precise, predictive, and sustainable.
          </p>
        </motion.div>

        <div className="innovation-grid">
          {innovations.map((item, index) => (
            <motion.div
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 100}
              className="innovation-card"
              style={{ '--card-color': item.color }}
            >
              <div className="innovation-icon" style={{ color: item.color }}>
                {item.icon}
              </div>
              <h3 className="innovation-title">{item.title}</h3>
              <p className="innovation-description">{item.description}</p>
              <div className="card-glow" style={{ background: `radial-gradient(circle, ${item.color}33, transparent)` }}></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="vision-box"
        >
          <h3>Our Vision</h3>
          <p>
            To create a future where every smart system — from a village microgrid to an industrial test bench — 
            operates <strong>autonomously</strong>, <strong>efficiently</strong>, and <strong>intelligently</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Innovation;
